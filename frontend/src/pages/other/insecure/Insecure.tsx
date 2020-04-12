import { h, FunctionalComponent } from "preact";
import Greeter from "~components/greeter/Greeter";

const Insecure: FunctionalComponent = () => <Greeter>This page is currently not secure.</Greeter>;

export default Insecure;
