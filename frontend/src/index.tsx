import { h, render } from "preact";
import { Provider } from "react-redux";
import { store } from "./store";

import "./global.scss";
import Main from "./Main";
import Themify from "./components/themify/Themify";

/**
 * Start the application.
 */
const start = (): void => {
	render(
		<Provider store={store}>
			<Themify>
				<Main />
			</Themify>
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
