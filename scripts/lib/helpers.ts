/**
 * Pure utility functions for the code generator
 */
import type { NamespaceInfo } from "./types.js"

/**
 * Convert a string to PascalCase
 * Handles dot, underscore, and hyphen separators
 */
export const toPascalCase = (str: string): string =>
  str
    .split(/[._-]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")

/**
 * Reserved JavaScript/TypeScript keywords that can't be used as identifiers
 */
export const RESERVED_WORDS: ReadonlySet<string> = new Set([
  "delete",
  "import",
  "export",
  "default",
  "class",
  "function",
  "return"
])

/**
 * Make a method name safe by appending underscore if it's a reserved word
 */
export const safeMethodName = (name: string): string =>
  RESERVED_WORDS.has(name) ? `${name}_` : name

/**
 * Generate a unique variable name using namespace path
 * For nested methods, prefixes with parent namespace names to avoid collisions
 */
export const uniqueMethodVarName = (
  namespacePath: readonly string[],
  methodName: string
): string => {
  const safeName = safeMethodName(methodName)
  if (namespacePath.length === 0) {
    return safeName
  }
  const prefix = namespacePath.map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("")
  return `${prefix}${safeName.charAt(0).toUpperCase() + safeName.slice(1)}`
}

/**
 * Count total methods across all namespaces (including nested)
 */
export const countMethods = (namespaces: readonly NamespaceInfo[]): number => {
  let count = 0
  const countNs = (ns: NamespaceInfo): void => {
    count += ns.methods.length
    ns.subNamespaces.forEach(countNs)
  }
  namespaces.forEach(countNs)
  return count
}

/**
 * Compute SHA256 hash of content
 */
export const computeHash = (content: string): string => {
  const crypto = require("node:crypto")
  return crypto.createHash("sha256").update(content).digest("hex")
}
