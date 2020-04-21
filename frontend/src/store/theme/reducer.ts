import { persistReducer } from "redux-persist";
import { Theme, ThemeActions, ThemeActionTypes, ThemeState } from "./";

import storage from "redux-persist/lib/storage";

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
const reducer = (state: ThemeState = initialState, action: ThemeActionTypes): ThemeState => {
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

export const themeReducer = persistReducer(
	{
		key: "theme",
		whitelist: ["active"],
		version: 0,
		storage,
	},
	reducer
);
