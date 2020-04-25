import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import * as style from "../auth.scss";

import Greeter from "~components/greeter/Greeter";
import Auth from "~components/auth/Auth";
import Button from "~components/button/Button";
import Input from "~components/input/Input";

const Register: FunctionalComponent = () => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("");

	const submitForm = (e: Event): void => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => setLoading(false), 5000);
	};

	const changeUsername = (newUser: string): void => {
		setUsername(newUser.toLowerCase().split(" ").join(""));
	};

	return (
		<Greeter>
			<Auth type="register">
				<form onSubmit={submitForm} class={style.webauthn}>
					<Input value={username} onChange={changeUsername} placeholder="Your Username" disabled={loading} />
					<Button type="submit" disabled={loading || username.length < 4}>
						Register with WebAuthn
					</Button>
				</form>
			</Auth>
		</Greeter>
	);
};

export default Register;
