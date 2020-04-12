import { Theme, ThemeActions, ThemeActionTypes, ThemeState } from "./";

/**
 * The initial state.
 */
const initialState: ThemeState = {
	schema: Theme.DEFAULT,
	variant: "dark",
};

/**
 * The reducer.
 * @param state The current state.
 * @param action The action to run.
 */
export const themeReducer = (
	state: ThemeState = initialState,
	action: ThemeActionTypes
): ThemeState => {
	switch (action.type) {
		case ThemeActions.SET_THEME:
			return {
				...state,
				schema: action.schema,
			};
		case ThemeActions.SET_THEME_VARIANT:
			return {
				...state,
				variant: action.variant,
			};
		default:
			return state;
	}
};
