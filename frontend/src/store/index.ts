import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import { themeReducer } from "./theme";

export const reducers = combineReducers({
	theme: themeReducer,
});

export type State = ReturnType<typeof reducers>;
export const store = createStore(reducers, devToolsEnhancer({}));
