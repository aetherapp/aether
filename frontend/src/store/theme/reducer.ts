import { Theme, ThemeActions, ThemeActionTypes, ThemeState } from "./";

/**
 * The initial state.
 */
const initialState: ThemeState = {
	active: Theme.DEFAULT,
};

/**
 * The reducer.
 * @param state The current state.
 * @param action The action to run.
 */
export const themeReducer = (state: ThemeState = initialState, action: ThemeActionTypes): ThemeState => {
	switch (action.type) {
		case ThemeActions.SET_THEME:
			return {
				...state,
				active: action.theme,
			};
		default:
			return state;
	}
};
