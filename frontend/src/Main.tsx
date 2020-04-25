import { h, FunctionalComponent, RenderableProps } from "preact";
import { connect } from "react-redux";

import { State } from "~store";

import Insecure from "~pages/other/insecure/Insecure";
import Auth from "~routers/Auth";

const Main: FunctionalComponent<RenderableProps<Props>> = () => {
	if (!window.isSecureContext) {
		return <Insecure />;
	}

	return <Auth />;
};

/**
 * Define the props for the component.
 */
type Props = StateProps;

interface StateProps {
	loggedIn: boolean;
}

/**
 * Props mapping from the store.
 */
const mapState = (state: State): StateProps => ({
	loggedIn: state.auth.loggedIn,
});

export default connect<StateProps, {}, {}>(mapState)(Main);
