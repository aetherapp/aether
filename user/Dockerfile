FROM aether-base as builder

FROM debian:buster-slim
COPY --from=builder /usr/src/aether/target/release/user /usr/local/bin/user
COPY README.md ./
COPY Rocket.toml ./
ENV ROCKET_ENV production
CMD ["user"]
