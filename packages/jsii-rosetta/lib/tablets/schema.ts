/**
 * Tablet file schema
 */
export interface TabletSchema {
  /**
   * Schema version
   */
  version: string;

  /**
   * What version of the tool this schema was generated with
   *
   * Hashing algorithms may depend on the tool version, and the tool
   * will reject tablets generated by different versions.
   *
   * Since tablets are designed to be used as scratch space during a build, not
   * designed to be stored long-term, this limitation does not impact
   * usability.
   */
  toolVersion: string;

  /**
   * All the snippets in the tablet
   */
  snippets: { [key: string]: TranslatedSnippetSchema };
}

export const ORIGINAL_SNIPPET_KEY = '$';

/**
 * Schema for a snippet
 */
export interface TranslatedSnippetSchema {
  /**
   * Translations for each individual language
   *
   * Since TypeScript is a valid output translation, the original will be
   * listed under the key '$'.
   */
  translations: { [key: string]: TranslationSchema };

  /**
   * A human-readable description of the location this code snippet was found
   */
  where: string;

  /**
   * Whether this was compiled without errors
   *
   * Undefined means compilation was not attempted.
   */
  didCompile?: boolean;

  /**
   * FQNs of classes and functions referenced in this snippet.
   */
  fqnsReferenced?: string[];

  /**
   * Counts the number of instances each kind of Typescript object shows up in the snippet AST.
   */
  syntaxKindCounter?: { [key: number]: number };

  /**
   * The full source (with fixture) that was compiled
   */
  fullSource?: string;
}

/**
 * A single snippet's translation
 */
export interface TranslationSchema {
  /**
   * The source of a single translation
   */
  source: string;
}
