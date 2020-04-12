import { Theme, ThemeVariant } from "./";

/**
 * An enum consisting of all action types handled by this reducer.
 */
export enum ThemeActions {
	SET_THEME,
	SET_THEME_VARIANT,
}

/**
 * Set a theme.
 * @param theme The theme to set.
 */
export const setTheme = (schema: Theme): SetThemeAction => ({
	type: ThemeActions.SET_THEME,
	schema,
});

export interface SetThemeAction {
	type: ThemeActions.SET_THEME;
	schema: Theme;
}

/**
 * Set a theme variant.
 * @param variant The variant to set.
 */
export const setThemeVariant = (
	variant: ThemeVariant
): SetThemeVariantAction => ({
	type: ThemeActions.SET_THEME_VARIANT,
	variant,
});

export interface SetThemeVariantAction {
	type: ThemeActions.SET_THEME_VARIANT;
	variant: ThemeVariant;
}

export type ThemeActionTypes = SetThemeAction | SetThemeVariantAction;
