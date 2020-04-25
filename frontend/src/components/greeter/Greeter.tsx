import { h, FunctionalComponent, RenderableProps } from "preact";
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import { State } from "~store";
import { setTheme, ThemeState, Theme } from "~store/theme";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Icon from "~components/icon/Icon";

import * as style from "./style.scss";

/**
 * Renders the component.
 * @param props Props to render with.
 */
const Greeter: FunctionalComponent<RenderableProps<Props>> = (props) => {
	const changeTheme = (): void => {
		const current = props.theme.active === Theme.AETHER_DARK;
		props.setTheme(current ? Theme.AETHER_LIGHT : Theme.AETHER_DARK);
	};

	return (
		<div class={style.wrapper}>
			<div class={style.content}>{props.children}</div>
			<span class={style.themeSwitcher} onClick={changeTheme}>
				<Icon icon={props.theme.active === Theme.AETHER_DARK ? faSun : faMoon} />
			</span>
		</div>
	);
};

/**
 * Props definition
 */
type Props = StateProps & DispatchProps;

interface StateProps {
	theme: ThemeState;
}

interface DispatchProps {
	setTheme: (theme: Theme) => void;
}

/**
 * Props mapping from the store.
 */
const mapState: MapStateToPropsParam<StateProps, {}> = (state: State) => ({
	theme: state.theme,
});

const mapDispatch: MapDispatchToPropsParam<DispatchProps, {}> = (dispatch) => ({
	setTheme: (theme: Theme) => dispatch(setTheme(theme)),
});

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(Greeter);
