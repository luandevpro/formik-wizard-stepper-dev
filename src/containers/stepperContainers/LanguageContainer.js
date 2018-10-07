import React from "react";
import { Consumer } from "../../contexts";
import Language from "../../components/stepper/Language";

export default props => (
	<Consumer>
		{value => <Language languages={value.languages} {...props} />}
	</Consumer>
);
