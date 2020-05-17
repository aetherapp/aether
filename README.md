# Aether

[![Build Status](https://travis-ci.org/aetherapp/aether.svg?branch=master)](https://travis-ci.org/aetherapp/aether)
[![Coverage Status](https://coveralls.io/repos/github/aetherapp/aether/badge.svg?branch=master)](https://coveralls.io/github/aetherapp/aether?branch=master)

_Breathing the air of gods._

Aether is a private cloud solution.

## Roadmap

| Feature            | State      |
| ------------------ | ---------- |
| Authentication     | Developing |
| File storage       | Planned    |
| User management    | Planned    |
| Contact storage    | Planned    |
| Mailbox            | Planned    |
| Matrix integration | Planned    |

### Getting started

#### Minikube

Minikube is the recommended setup for simple deployment and development.
We provide a helm chart, so setup is really easy.

##### Prerequisites

- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
- [Helm](https://helm.sh/docs/intro/install/)
- [Git](https://git-scm.com/)

##### Enabling ingress

To access Aether, you need to enable the ingress controller.
This will allow external traffic to route to the microservice as needed.

To activate the ingress, simple run the following:

```
minikube addons enable ingress
```

Now wait till the ingress controller shows `running`:

```
kubectl get pods -wn kube-system
```

##### Getting the Aether source

Clone the repository.
If you don't know how, [check out this page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
The only folder we care about is `./helm`.
Enter that folder, and you'll see the helm chart.

##### Customize your installation

You can set basic settings inside the `values.yaml` file.
Modify the values to your liking, the comments should explain what it too.
Later on you can add more specific configuration in the web UI.

##### Deploying Aether chart

Now you're ready to deploy Aether!
Running the command will install and configure the app onto the cluster.
To do so, run the following command:

```
helm install aether .
```

After this ran, find your ingress IP with the following command:

```
kubectl get ingress
```

Installation will take a while, so don't worry if the IP is not directly available.
Retry after a few minutes if it's on pending.
Use your modern browser of choice to browse to that IP, it will guide your through the installation process.

#### Other Kubernetes systems

This guide is still TBD. If you do want to try this, check out the Minikube guide above. It should partly be similair. This is the recommended for larger setup.

#### Docker

A docker compose file is planned for easy deployment without k8s. Support for this setup is on best-effort basis.

#### Other

As this application is build with microservices there are a lot of moving parts. Therefore other types of deployment are not supported and even discouraged.
