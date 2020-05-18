# Todo: change to rust:latest once Rocket build on stable.
FROM rustlang/rust:nightly AS builder

WORKDIR /usr/src/aether
COPY . .

RUN cargo test
RUN cargo build --release

FROM debian:buster-slim
WORKDIR /usr/local/bin

COPY --from=builder /usr/src/aether/target/release/aether .
COPY README.md ./
COPY Rocket.toml ./

ENV ROCKET_ENV production
CMD ["aether"]
