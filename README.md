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

## Structure

This repository is a monorepo for the backend, and such contains all code for it.

| Folder | Purpose                                                            |
| ------ | ------------------------------------------------------------------ |
| Health | Health endpoint, also serves as a base for new services.           |
| Shared | Defines shared structures bewteen services, not an actual service. |
