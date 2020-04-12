/**
 * Different available themes.
 * Don't forget you need to implement them too!
 */
export enum Theme {
	AETHER = "aether",
	DEFAULT = AETHER,
}

/**
 * Variants of themes.
 * Should be implemented by every theme.
 */
export type ThemeVariant = "dark" | "light";

/**
 * State of the theme store.
 */
export interface ThemeState {
	schema: Theme;
	variant: "dark" | "light";
}
