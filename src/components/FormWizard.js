import React, { Component } from "react";
import { Formik } from "formik";
import * as Types from "../constants/ActionTypes";

export default class FormWizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			categoryIds: [],
			languages: [],
		};
	}
	handleSubmit = (value, bag) => {
		let isLastPage =
			this.props.activeStepIndex ===
			this.props.children.props.children.length - 1;
		if (isLastPage) {
			alert(JSON.stringify(value, 2, null));
		} else {
			this.props.dispatchOnNextStep({
				type: Types.ON_NEXT_STEP,
				payload: value,
			});
			bag.setSubmitting(false);
		}
	};
	validate = values => {
		const activePage = React.Children.toArray(
			this.props.children.props.children
		)[this.props.activeStepIndex];
		// console.log(activePage.props.validate(values));
		return activePage.props.validate ? activePage.props.validate(values) : {};
	};
	render() {
		var { email, categoryIds, languages } = this.state;
		const { children } = this.props;
		return (
			<Formik
				initialValues={{ email, categoryIds, languages }}
				validate={this.validate}
				onSubmit={this.handleSubmit}
			>
				{children}
			</Formik>
		);
	}
}
