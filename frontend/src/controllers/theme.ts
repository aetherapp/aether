/**
 * Controlls the theme of the page.
 */
export class Theme {
	private active: ITheme;

	/**
	 * Get the current active theme.
	 */
	public get(): ITheme {
		if (!this.active) {
			const stored = localStorage.getItem("theme");

			if (stored in ITheme) {
				this.active = ITheme[stored as keyof typeof ITheme];
			} else {
				this.active = ITheme.Default;
			}
		}

		return this.active;
	}

	/**
	 * Set a new theme.
	 * @param theme Theme to set.
	 */
	public set(theme: ITheme): void {
		this.active = theme;
		localStorage.setItem("theme", this.active);
	}
}

/**
 * All available themes.
 */
export enum ITheme {
	Light = "light",
	Dark = "dark",
	Default = Light,
}
