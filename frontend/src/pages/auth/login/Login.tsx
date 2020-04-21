import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

import Greeter from "~components/greeter/Greeter";
import Auth from "~components/auth/Auth";
import Button from "~components/button/Button";

const Login: FunctionalComponent = () => (
	<Greeter>
		<Auth type="login">
			<div class={style.authOptions}>
				<Button>Login with WebAuthn</Button>
			</div>
		</Auth>
	</Greeter>
);

export default Login;
