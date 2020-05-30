import { h, FunctionalComponent, RenderableProps } from "preact";
import { connect } from "react-redux";

import { State } from "~store";
import { ThemeState, Theme } from "~store/theme";

import * as themes from "~themes.scss";

/**
 * Render the component.
 * @param props The props passed for rendering.
 */
const Themify: FunctionalComponent<RenderableProps<Props>> = (props) => {
	let theme: string;

	switch (props.theme.active) {
		case Theme.AETHER_DARK:
			theme = themes.aetherDark;
			break;
		case Theme.AETHER_LIGHT:
			theme = themes.aetherLight;
			break;
		default:
			theme = themes.aetherDark;
	}

	return <div class={theme}>{props.children}</div>;
};

/**
 * Define the props for the component.
 */
type Props = StateProps;

interface StateProps {
	theme: ThemeState;
}

/**
 * Props mapping from the store.
 */
const mapState = (state: State): StateProps => ({
	theme: state.theme,
});

export default connect<StateProps, {}, {}>(mapState)(Themify);
