import { h, FunctionalComponent } from "preact";
import Greeter from "~components/greeter/Greeter";

import * as style from "./style.scss";

const Insecure: FunctionalComponent = () => {
	const splitUrl = window.location.href.split("://");
	splitUrl[0] = "https";
	const secureUrl = splitUrl.join("://");

	return (
		<Greeter title="Security Fault">
			<span class={style.content}>
				This page is currently not secured. Aether requires a secure context to keep your data safe. Click{" "}
				<a href={secureUrl}>here</a> to attempt to solve it, or contact your system administrator.
			</span>
		</Greeter>
	);
};

export default Insecure;
