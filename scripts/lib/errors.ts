/**
 * Error types for the code generator
 */
import { Data } from "effect"

// === File System Errors ===

export class MethodsFileNotFoundError extends Data.TaggedError("MethodsFileNotFoundError")<{
  readonly path: string
}> {}

export class MethodsFileReadError extends Data.TaggedError("MethodsFileReadError")<{
  readonly path: string
  readonly cause: unknown
}> {}

export class PackageJsonNotFoundError extends Data.TaggedError("PackageJsonNotFoundError")<{
  readonly path: string
}> {}

export class PackageJsonReadError extends Data.TaggedError("PackageJsonReadError")<{
  readonly path: string
  readonly cause: unknown
}> {}

export class GeneratedDirCreateError extends Data.TaggedError("GeneratedDirCreateError")<{
  readonly path: string
  readonly cause: unknown
}> {}

export class WriteFileError extends Data.TaggedError("WriteFileError")<{
  readonly path: string
  readonly cause: unknown
}> {}

// === Parsing Errors ===

export class MethodsClassNotFoundError extends Data.TaggedError("MethodsClassNotFoundError")<{
  readonly message: string
}> {}

// === Check Mode Errors ===

export class MetadataNotFoundError extends Data.TaggedError("MetadataNotFoundError")<{
  readonly path: string
}> {}

export class MetadataReadError extends Data.TaggedError("MetadataReadError")<{
  readonly path: string
  readonly cause: unknown
}> {}

export class GeneratedCodeOutOfDateError extends Data.TaggedError("GeneratedCodeOutOfDateError")<{
  readonly expectedHash: string
  readonly currentHash: string
}> {}

// === Union Type ===

export type GeneratorError =
  | MethodsFileNotFoundError
  | MethodsFileReadError
  | PackageJsonNotFoundError
  | PackageJsonReadError
  | GeneratedDirCreateError
  | WriteFileError
  | MethodsClassNotFoundError
  | MetadataNotFoundError
  | MetadataReadError
  | GeneratedCodeOutOfDateError
