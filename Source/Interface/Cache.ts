/**
 * Represents the cache path configuration.
 */
export type Type =
	| {
			Folder: string | URL | false;
			Base: string | URL | false;
	  }
	| false;
