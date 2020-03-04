FROM aether-base as builder

FROM debian:buster-slim
COPY --from=builder /usr/src/aether/target/release/health /usr/local/bin/health
COPY README.md ./
ENV ROCKET_ENV production
ENV ROCKET_PORT 80
CMD ["health"]