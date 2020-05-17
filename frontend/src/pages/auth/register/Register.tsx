import { h, FunctionalComponent, RenderableProps } from "preact";
import { useState } from "preact/hooks";
import { connect } from "react-redux";
import { Dispatch } from "~store";
import { registerWebAuthn } from "~store/auth";

import * as style from "../auth.scss";

import Greeter from "~components/greeter/Greeter";
import Auth from "~components/auth/Auth";
import Button from "~components/button/Button";
import Input from "~components/input/Input";

const Register: FunctionalComponent<RenderableProps<Props>> = (props) => {
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("");

	const submitForm = (e: Event): void => {
		e.preventDefault();
		setLoading(true);

		props
			.registerWebAuthn(username)
			.then(() => console.log("hello world"))
			.catch((err: Error) => console.error(err))
			.finally(() => setLoading(false));
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

/**
 * Props definition.
 */
type Props = DispatchProps;

interface DispatchProps {
	registerWebAuthn: (username: string) => Promise<void>;
}

/**
 * Store to Props mapping.
 */
const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
	registerWebAuthn: (username) => dispatch(registerWebAuthn(username)),
});

export default connect<{}, DispatchProps>(null, mapDispatch)(Register);
