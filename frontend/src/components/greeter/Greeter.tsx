import { h, FunctionalComponent } from "preact";

import "./style.scss";

const Greeter: FunctionalComponent = (props) => (
	<div>
		<h1>Hello world</h1>
		<p>{props.children}</p>
	</div>
);

export default Greeter;
