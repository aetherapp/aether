import { h, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

const Auth: FunctionalComponent<RenderableProps<Props>> = (props) => {
	let switchButton: JSX.Element;

	if (props.type === "login") {
		switchButton = (
			<a href="/register" class={style.typeSwitch}>
				Create an account
			</a>
		);
	} else {
		switchButton = (
			<a href="/" class={style.typeSwitch}>
				Login instead
			</a>
		);
	}

	return (
		<div class={style.container}>
			<h1 class={style.header}>{props.type === "login" ? "Login" : "Register"}</h1>
			{props.children}
			{switchButton}
		</div>
	);
};

/**
 * Prop definition.
 */
type Props = OwnProps;

interface OwnProps {
	type: "login" | "register";
}

export default Auth;
