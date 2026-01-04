/**
 * Type definitions for the code generator
 */

/**
 * Information about a single Slack API method
 */
export interface MethodInfo {
  readonly name: string
  readonly apiPath: string
  readonly argsType: string
  readonly responseType: string
  readonly isOptionalArgs: boolean
  readonly description?: string
  readonly deprecated?: boolean
}

/**
 * Information about a namespace (e.g., chat, users, admin)
 */
export interface NamespaceInfo {
  readonly name: string
  readonly methods: readonly MethodInfo[]
  readonly subNamespaces: readonly NamespaceInfo[]
}

/**
 * Metadata stored alongside generated files for version tracking
 */
export interface Metadata {
  readonly generatedAt: string
  readonly slackWebApiVersion: string
  readonly methodsFileHash: string
  readonly methodCount: number
}

/**
 * A generated method with its implementation and export names
 */
export interface GeneratedMethod {
  readonly implementation: string
  readonly varName: string
  readonly exportName: string
}

/**
 * A generated file with filename and content
 */
export interface GeneratedFile {
  readonly filename: string
  readonly content: string
}

/**
 * Configuration for the generator
 */
export interface GeneratorConfig {
  readonly rootDir: string
  readonly methodsFilePath: string
  readonly generatedDir: string
  readonly metadataFilePath: string
}

/**
 * JSDoc information extracted from TypeScript nodes
 */
export interface JsDocInfo {
  readonly description?: string
  readonly deprecated?: boolean
}
