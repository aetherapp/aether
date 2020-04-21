import { persistReducer } from "redux-persist";
import { AuthState, AuthActionTypes } from "./";

import storage from "redux-persist/lib/storage";

/**
 * The initial state.
 */
const initialState: AuthState = {
	loggedIn: false,
	auth: null,
	refresh: null,
};

/**
 * The reducer.
 * @param state The current state.
 * @param action The action to run.
 */
export const reducer = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
	return state;
};

export const authReducer = persistReducer(
	{
		key: "auth",
		whitelist: ["auth", "refresh"],
		version: 0,
		storage,
	},
	reducer
);