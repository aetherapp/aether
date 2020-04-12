import { h, ComponentChildren, FunctionalComponent } from "preact";
import { connect } from "react-redux";

import { State } from "~store";
import { ThemeState } from "~store/theme";

/**
 * Render the component.
 * @param props The props passed for rendering.
 */
const Themify: FunctionalComponent<Props> = (props) => (
	<div class={`theme-${props.theme.schema}-${props.theme.variant}`}>{props.children}</div>
);

/**
 * Define the props for the component.
 */
type Props = StateProps & OwnProps;

interface OwnProps {
	children: ComponentChildren;
}

interface StateProps {
	theme: ThemeState;
}

const mapState = (state: State): StateProps => ({
	theme: state.theme,
});
export default connect<StateProps, {}, OwnProps>(mapState)(Themify);
