import React, { Component } from "react";
import AppContext from "./AppContext";
import FormWizardContainer from "./containers/FormWizardContainer";
import Email from "./components/stepper/Email";
import LanguageContainer from "./containers/stepperContainers/LanguageContainer";

class App extends Component {
	render() {
		return (
			<AppContext>
				<FormWizardContainer>
					<Email />
					<LanguageContainer />
					<h1>hello 3</h1>
					<h1>hello 4</h1>
				</FormWizardContainer>
			</AppContext>
		);
	}
}

export default App;
