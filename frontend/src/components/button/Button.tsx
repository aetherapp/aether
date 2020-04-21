import { h, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

const Button: FunctionalComponent<RenderableProps<Props>> = (props) => (
	<button class={style.button} onClick={props.onClick}>
		{props.children}
	</button>
);

/**
 * Prop definition.
 */
type Props = OwnProps;

interface OwnProps {
	onClick?: () => void;
}

export default Button;
