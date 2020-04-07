import { h, FunctionalComponent } from "preact";
import Greeter from "~components/greeter/Greeter";

const Insecure: FunctionalComponent = () => <Greeter>AAAAA</Greeter>;

export default Insecure;
