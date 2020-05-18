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

#### Docker

A docker image is automatically build, and can be fetched [here](https://hub.docker.com/repository/docker/aethercloud/aether). It's also possible to host the frontend separately with [this](https://hub.docker.com/repository/docker/aethercloud/frontend) image. A docker compose file is planned.

#### Direct

This method is discouraged, and only for development purposes.

You can run the application directly with `cargo run --release`. This will start the app, including the frontend.

#### Kubernetes

Kubernetes is planned for later, but you will have to wait. For now you can use Docker part above as a starting point.
