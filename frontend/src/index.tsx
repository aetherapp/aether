import { h, render } from "preact";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import Main from "./Main";
import Themify from "./components/themify/Themify";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
	render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Themify>
					<Main />
				</Themify>
			</PersistGate>
		</Provider>,
		document.body
	);
};

/**
 * Enable hot reloading.
 */
if (module.hot) {
	module.hot.accept("/Main", () => requestAnimationFrame(start));
}

/**
 * Include the debug code if it's a development build.
 */
if (process.env.NODE_ENV === "development") {
	require("preact/debug");
}

/**
 * Let's start!
 */
start();
