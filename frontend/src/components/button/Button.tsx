import { h, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

const Button: FunctionalComponent<RenderableProps<Props>> = (props) => (
	<button class={style.button} onClick={props.onClick} type={props.type} disabled={props.disabled}>
		{props.children}
	</button>
);

/**
 * Prop definition.
 */
interface Props {
	onClick?: () => void;
	type?: string;
	disabled?: boolean;
}

export default Button;
