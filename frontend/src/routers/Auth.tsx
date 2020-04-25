import { h, FunctionalComponent } from "preact";

import Router from "preact-router";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

const Auth: FunctionalComponent = () => (
	<Router>
		<Register path="/register" />
		<Login default />
	</Router>
);

export default Auth;
