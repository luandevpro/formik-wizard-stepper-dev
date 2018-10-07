import React, { Component } from "react";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import FormFieldContainer from "../containers/FormFieldContainer";

export default class FormResgister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			categoryIds: [],
			languages: [],
		};
	}
	handleSubmit = (value, bag) => {
		console.log(value, bag);
	};
	render() {
		var { email, categoryIds, languages } = this.state;
		return (
			<Formik
				initialValues={{ email, categoryIds, languages }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
				render={props => <FormFieldContainer {...props} />}
			/>
		);
	}
}
