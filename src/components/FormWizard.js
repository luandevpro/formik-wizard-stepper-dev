import React, { Component } from "react";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import FormField from "./FormField";
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
		let totalPage = this.props.children.props.children.length;
		let isLastPage =
			this.props.activeStepIndex ===
			this.props.children.props.children.length - 1;
		if (isLastPage) {
			alert("abc");
		} else {
			this.props.dispatchOnNextStep({
				type: Types.ON_NEXT_STEP,
				payload: value,
			});
			bag.setSubmitting(false);
		}
	};
	render() {
		var { email, categoryIds, languages } = this.state;
		const { children } = this.props;
		return (
			<Formik
				initialValues={{ email, categoryIds, languages }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{children}
			</Formik>
		);
	}
}
