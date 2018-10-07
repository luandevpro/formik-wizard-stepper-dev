import React from "react";
import { Consumer } from "../contexts";
import FormField from "../components/FormField";

export default props => (
	<Consumer>
		{value => (
			<FormField
				languages={value.languages}
				categories={value.categories}
				{...props}
			/>
		)}
	</Consumer>
);
