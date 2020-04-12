import { h, FunctionalComponent } from "preact";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders the component.
 * @param props Props to render with.
 */
const Icon: FunctionalComponent<Props> = (props) => {
	const definition = props.icon.icon;
	const path =
		typeof definition[4] === "string"
			? definition[4]
			: definition[4].reduce((c: string, v: string) => `${c} ${v}`, "");

	return (
		<svg viewBox={`0 0 ${definition[0]} ${definition[1]}`}>
			<path d={path} />
		</svg>
	);
};

interface Props {
	icon: IconDefinition;
}

export default Icon;
