/**
 * State of the auth store.
 */
export interface AuthState {
	/**
	 * If the user is currently logged in.
	 */
	loggedIn: boolean;
	/**
	 * JWT authorization token.
	 */
	auth: string;
	/**
	 * JWT refresh token.
	 */
	refresh: string;
}
