import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import * as style from "../auth.scss";

import Greeter from "~components/greeter/Greeter";
import Auth from "~components/auth/Auth";
import Button from "~components/button/Button";

const Login: FunctionalComponent = () => {
	const [loading, setLoading] = useState(false);

	const submitForm = (e: Event): void => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => setLoading(false), 5000);
	};

	return (
		<Greeter>
			<Auth type="login">
				<form onSubmit={submitForm} class={style.webauthn}>
					<Button type="submit" disabled={loading}>
						Login with WebAuthn
					</Button>
				</form>
			</Auth>
		</Greeter>
	);
};

export default Login;
