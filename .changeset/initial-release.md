---
"effect-slack": minor
---

Initial release with 272 auto-generated Slack API methods

- 100% type-safe with full TypeScript types for all methods, arguments, and responses
- Typed errors with discriminated unions for precise error handling via `catchTag`/`catchTags`
- Built-in OpenTelemetry tracing with rich span attributes
- Smart retry policies with rate limit awareness and exponential backoff
- Testable by design using Effect layers for dependency injection
- Auto-generated from official `@slack/web-api` types
