# This is the base image.
# It will build the binaries, but does not extract it.
# This is defined at the individual packages.

# Todo: change to rust:latest once Rocket build on stable.
FROM rustlang/rust:nightly
WORKDIR /usr/src/aether
COPY . .
RUN cargo test
RUN cargo build --release