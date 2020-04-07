/**
 * Controller manager class.
 * Here components can request a type of controller,
 * which will then be returned as a singleton.
 */
export default class Controllers {
	private static active: {};

	public static get(controller: Controller): Controller {
		return controller;
	}
}

/**
 * Interface to mark a class as controller.
 */
export interface Controller {}
