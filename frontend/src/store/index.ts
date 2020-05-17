import { createStore, combineReducers, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { persistStore } from "redux-persist";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";

import { themeReducer } from "./theme";
import { authReducer } from "./auth";

const reducers = combineReducers({
	theme: themeReducer,
	auth: authReducer,
});

export type State = ReturnType<typeof reducers>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>;
export type Dispatch = ThunkDispatch<State, undefined, AnyAction>;
export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware<ThunkDispatch<State, undefined, AnyAction>, State>(thunk))
);
export const persistor = persistStore(store);
