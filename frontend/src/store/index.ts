import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import { persistStore } from "redux-persist";

import { themeReducer } from "./theme";
import { authReducer } from "./auth";

const reducers = combineReducers({
	theme: themeReducer,
	auth: authReducer,
});

export type State = ReturnType<typeof reducers>;
export const store = createStore(reducers, devToolsEnhancer({}));
export const persistor = persistStore(store);
