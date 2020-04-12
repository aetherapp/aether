import { h, FunctionalComponent } from "preact";
import Insecure from "~pages/other/insecure/Insecure";

const Main: FunctionalComponent = () => {
	if (!window.isSecureContext) {
		return <Insecure />;
	}

	return <div>Aaaaaaa</div>;
};

export default Main;
