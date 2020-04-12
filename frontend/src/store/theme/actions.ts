import { Theme } from "./";

/**
 * An enum consisting of all action types handled by this reducer.
 */
export enum ThemeActions {
	SET_THEME,
}

/**
 * Set a theme.
 * @param theme The theme to set.
 */
export const setTheme = (theme: Theme): SetThemeAction => ({
	type: ThemeActions.SET_THEME,
	theme,
});

export interface SetThemeAction {
	type: ThemeActions.SET_THEME;
	theme: Theme;
}

export type ThemeActionTypes = SetThemeAction;
