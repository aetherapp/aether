FROM aether-base as builder

FROM debian:buster-slim
COPY --from=builder /usr/src/aether/target/release/health /usr/local/bin/health
COPY README.md ./
COPY Rocket.toml ./
ENV ROCKET_ENV production
CMD ["health"]
