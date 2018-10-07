import React, { Component } from "react";
import AppContext from "./AppContext";
import FormResgisterContainer from "./containers/FormResgisterContainer";

class App extends Component {
	render() {
		return (
			<AppContext>
				<FormResgisterContainer />
			</AppContext>
		);
	}
}

export default App;
