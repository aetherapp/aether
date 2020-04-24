import { h, FunctionalComponent, RenderableProps } from "preact";

import * as style from "./style.scss";

const Input: FunctionalComponent<RenderableProps<Props>> = (props) => (
	<input
		class={style.input}
		value={props.value}
		type={props.type}
		onChange={(e) => props.onChange(e.currentTarget.value)}
		placeholder={props.placeholder}
		disabled={props.disabled}
	>
		{props.children}
	</input>
);

/**
 * Prop definition.
 */
interface Props {
	onChange: (newVal: string) => void;
	value: string;
	placeholder: string;
	type?: string;
	disabled?: boolean;
}

export default Input;
