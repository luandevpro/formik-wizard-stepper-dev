import React, { Component } from "react";
import AppContext from "./AppContext";
import FormWizardContainer from "./containers/FormWizardContainer";
import {
	emailValidator,
	languageValidator,
	songValidator,
} from "./components/form/validation";
import EmailContainer from "./containers/stepperContainers/EmailContainer";
import LanguageContainer from "./containers/stepperContainers/LanguageContainer";
import SongContainer from "./containers/stepperContainers/SongContainer";

class App extends Component {
	render() {
		return (
			<AppContext>
				<FormWizardContainer>
					<EmailContainer validate={emailValidator} />
					<LanguageContainer validate={languageValidator} />
					<SongContainer validate={songValidator} />
				</FormWizardContainer>
			</AppContext>
		);
	}
}

export default App;
