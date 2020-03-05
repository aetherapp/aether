#!/bin/bash

DOCKER_ORG="aethercloud"

if [[ -z "${CI}" ]]; then
	echo "This script is for running in the CI only!"
	exit 1
fi

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Build base image
docker build -t aether-base .

# Build docker containers
for i in $(ls -d */); do
	CONTAINER=${i%%/}
	if [ ! -f "$CONTAINER/Dockerfile" ]; then
		continue
	fi

	echo "Building $DOCKER_ORG/$CONTAINER.."
	docker build -t $DOCKER_ORG/$CONTAINER $CONTAINER
done

# Push to registery
for i in $(ls -d */); do
	CONTAINER=${i%%/}
	if [ ! -f "$CONTAINER/Dockerfile" ]; then
		continue
	fi

	echo "Pushing $DOCKER_ORG/$CONTAINER.."
	docker push $DOCKER_ORG/$CONTAINER
done
