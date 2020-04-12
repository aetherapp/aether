import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import { persistStore, persistReducer } from "redux-persist";
import { themeReducer } from "./theme";

import storage from "redux-persist/lib/storage";

export const reducers = persistReducer(
	{
		key: "aether",
		whitelist: ["theme"],
		version: 0,
		storage,
	},
	combineReducers({
		theme: themeReducer,
	})
);

export type State = ReturnType<typeof reducers>;
export const store = createStore(reducers, devToolsEnhancer({}));
export const persistor = persistStore(store);
