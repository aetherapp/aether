import { h, FunctionalComponent, ComponentChildren } from "preact";
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import { State } from "~store";
import { ThemeVariant, setThemeVariant, ThemeState } from "~store/theme";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";
import Icon from "~components/icon/Icon";

/**
 * Renders the component.
 * @param props Props to render with.
 */
const Greeter: FunctionalComponent<Props> = (props) => (
	<div>
		<h1>Hello world</h1>
		<p>{props.children}</p>
		<span
			class="theme-switcher"
			onClick={() => props.setThemeVariant(props.theme.variant === "dark" ? "light" : "dark")}
		>
			<Icon icon={props.theme.variant === "dark" ? faSun : faMoon} />
		</span>
	</div>
);

/**
 * Props definition
 */
type Props = StateProps & DispatchProps & OwnProps;

interface OwnProps {
	children: ComponentChildren;
}

interface StateProps {
	theme: ThemeState;
}

interface DispatchProps {
	setThemeVariant: (variant: ThemeVariant) => void;
}

const mapState: MapStateToPropsParam<StateProps, OwnProps> = (state: State) => ({
	theme: state.theme,
});
const mapDispatch: MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch) => ({
	setThemeVariant: (variant: ThemeVariant) => dispatch(setThemeVariant(variant)),
});
export default connect<StateProps, DispatchProps, OwnProps>(mapState, mapDispatch)(Greeter);
