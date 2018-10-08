import React from "react";
import { Consumer } from "../../contexts";
import Song from "../../components/stepper/Song";

export default props => (
	<Consumer>
		{value => <Song categories={value.categories} {...props} />}
	</Consumer>
);
