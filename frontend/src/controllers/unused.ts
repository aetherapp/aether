import { Controller } from "~controllers";

export class Unused implements Controller {
	public hello(): void {
		console.log("hello world");
	}
}
