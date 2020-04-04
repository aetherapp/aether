import { h, render } from "preact";

/**
 * Include the debug code if it's a development build.
 */
if (process.env.NODE_ENV === "development") {
	require("preact/debug");
}

/**
 * Render the app
 */
render(<div>Hello Preact!</div>, document.body);
