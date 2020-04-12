/**
 * Different available themes.
 * Don't forget you need to implement them too!
 */
export enum Theme {
	AETHER_LIGHT = "aetherLight",
	AETHER_DARK = "aetherDark",
	DEFAULT = AETHER_DARK,
}

/**
 * State of the theme store.
 */
export interface ThemeState {
	active: Theme;
}
