import { h, FunctionalComponent } from "preact";

import Greeter from "~components/greeter/Greeter";
import Auth from "~components/auth/Auth";

const Register: FunctionalComponent = () => (
	<Greeter>
		<Auth type="register">Register screen</Auth>
	</Greeter>
);

export default Register;
