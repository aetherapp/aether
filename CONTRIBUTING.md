# Contributing to Aether

First of all, thank you for considering to contribute to Aether.
We gladly accept your help.
This document shows how to get started, and how to submit a patch.

## Getting started

To get started, follow the Minikube guide in the Readme.
This will set up a development environment for you.

### Telepresence

In order to work on a feature, we use [Telepresence](https://www.telepresence.io).
This swaps out the service you want to work with, giving you full access to the cluster.
It will give you access to the database, dns, and other services.
Your program could also be called by other services, or by users through the ingress.
Please install this now, you'll need it.

### Developing the frontend

Developing the frontend is fairly easy, just make sure the kube cluster is running, and helm has been deployed.
Now you can `cd` in the frontend directory, and run `yarn swap-watch`.
A development server will spin up, and you can start hacking away on the frontend.
Just do `^C` to stop, cleanup will be done automatically.

### Developing the backend

The backend has an additional step, but it's not much more work.
First, run this command:

```
telepresence --swap-deployment aether-backend --expose 8000:80
```

This swaps out the production dev environment, and starts listening on port 8000 locally for a replacement.
Now start the backend like normal with `cargo run`.

To exit, just exit the shell as normal.
Telepresence will automatically swap the real service back.

## Submitting a patch

So you have thought of a great patch, and you are ready to start?
Not so fast!
In order to make sure you are not doing unnessesary work,
we strongly encourage you to first make a issue (or find an existing one), explaining your patch.
A maintainer will take a look at your plan.
This will make sure the work you do has a high chance of being accepted.

You've created an issue, and a maintainer gave the green light?
Then you can start creating the patch.
When you're done you can create a Pull Request.
The CI will then test you code, and style, as much as possible.
If everything looks good maintainers will take a look.
They'll test your code and give you feedback.

You might need to make a few changes to your code before it can be merged.
Don't be discouraged if this happens!
We are only trying to help.

If the maintainers give the all clear, the pull request can be merged.
Congratulations! You are now officially a contributer of Aether!
Your patch will be shipped with the next release.

## Guidelines

In order to keep things as smooth as possible, we have a few simple guidelines.
Read them, use them, that will make things go a lot smoother.

### Test everything you can!

This is really important to keep the reliablily of Aether high.
Test everything you can with integration tests and/or unit tests.
The more tests, the better.
This will decrease regression bugs, and increase development speed later on.

### Stick to the existing style

In order to keep things consistant keep developing in the same style as the rest of the code.
Take a look at RustFmt, Prettier, EditorConfig, and of course the rest of the code for examples.
