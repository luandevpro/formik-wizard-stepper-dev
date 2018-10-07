import React, { Component } from "react";
import { Field } from "formik";
import CustomInput from ".././CustomInput";

export default class Email extends Component {
	render() {
		return (
			<div className="form-group">
				<label>Age</label>
				<Field
					name="email"
					type="email"
					placeholder="Age"
					className="form-control"
					component={CustomInput}
				/>
			</div>
		);
	}
}
