import React from "react";
import { Consumer } from "../../contexts";
import Email from "../../components/stepper/Email";

export default props => (
	<Consumer>{value => <Email {...value} {...props} />}</Consumer>
);
