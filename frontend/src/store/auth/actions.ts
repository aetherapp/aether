import { AppThunk } from "~store";

/**
 * An enum consisting of all action types handled by this reducer.
 */
export enum AuthActions {
	LOGOUT,
}

/**
 * Log out the current user
 */
export const logout = (): Logout => ({
	type: AuthActions.LOGOUT,
});

export interface Logout {
	type: AuthActions.LOGOUT;
}

/**
 * Register with WebAuthn.
 */
export const registerWebAuthn: RegisterWebAuthn = (
	username: string
): AppThunk<Promise<void>> => async (): Promise<void> => {
	const req = await fetch("/api/auth/register", {
		method: "post",
		body: JSON.stringify({
			authType: "WebAuthn",
			username,
		}),
	});

	console.log(req);
	console.log(await req.json());
};

export type RegisterWebAuthn = (username: string) => AppThunk<Promise<void>>;

export type AuthSyncActionTypes = Logout;
export type AuthActionTypes = AuthSyncActionTypes | RegisterWebAuthn;
