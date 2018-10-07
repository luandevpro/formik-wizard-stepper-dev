import React, { Component } from "react";
import { Consumer } from "../contexts";
import FormWizard from "../components/FormWizard";
import FormField from "../components/FormField";

export default class FormWizardContainer extends Component {
	showFormField = (props, activeStepIndex, dispatchOnNextStep) => {
		return (
			<FormField
				{...props}
				activeStepIndex={activeStepIndex}
				dispatchOnNextStep={dispatchOnNextStep}
			/>
		);
	};
	render() {
		return (
			<Consumer>
				{value => (
					<FormWizard
						{...value}
						{...this.props}
						dispatchOnNextStep={value.dispatchOnNextStep}
					>
						{this.showFormField(
							this.props,
							value.activeStepIndex,
							value.dispatchOnNextStep
						)}
					</FormWizard>
				)}
			</Consumer>
		);
	}
}
