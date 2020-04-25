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

export type AuthActionTypes = Logout;
