// Core service exports
export { SlackService } from "./SlackService.js"
export { SlackConfig, type SlackConfigShape } from "./SlackConfig.js"
export { SlackClient } from "./SlackClient.js"

// Generated services (100% Slack API coverage)
export * from "./generated/index.js"

// Error exports
export {
  ErrorCode,
  SlackRequestError,
  SlackHttpError,
  SlackPlatformError,
  SlackRateLimitedError,
  SlackFileUploadInvalidArgumentsError,
  SlackFileUploadReadError,
  SlackUnknownError,
  type SlackError
} from "./Errors.js"

// Retry exports
export {
  isRetryableError,
  tenRetriesInAboutThirtyMinutes,
  fiveRetriesInFiveMinutes,
  rapidRetryPolicy,
  rateLimitAwareSchedule,
  withDefaultRetry,
  withRateLimitRetry,
  withRateLimitOnlyRetry,
  withRetryOrElse,
  Schedules,
  type RetryOptions
} from "./Retry.js"

// Re-export useful types from @slack/web-api
export type {
  // Chat types
  ChatPostMessageArguments,
  ChatPostMessageResponse,
  ChatUpdateArguments,
  ChatUpdateResponse,
  ChatDeleteArguments,
  ChatDeleteResponse,
  // Conversations types
  ConversationsListArguments,
  ConversationsListResponse,
  ConversationsInfoArguments,
  ConversationsInfoResponse,
  // Users types
  UsersListArguments,
  UsersListResponse,
  UsersInfoArguments,
  UsersInfoResponse,
  // Reactions types
  ReactionsAddArguments,
  ReactionsAddResponse,
  ReactionsRemoveArguments,
  ReactionsRemoveResponse,
  // Files types
  FilesUploadV2Arguments,
  FilesUploadResponse,
  // WebClient types
  WebClient,
  WebClientOptions,
  WebAPICallResult
} from "@slack/web-api"
