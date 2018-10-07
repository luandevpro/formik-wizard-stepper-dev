import React, { Component } from "react";
import { FieldArray } from "formik";
import CustomRadio from "../CustomRadio";

export default class Language extends Component {
	render() {
		var { values, languages } = this.props;
		console.log(this.props);
		return (
			<div className="form-group">
				<FieldArray
					name="languages"
					className="form-control"
					render={arrayHelpers => (
						<CustomRadio
							arrayHelpers={arrayHelpers}
							values={values}
							languages={languages}
						/>
					)}
				/>
			</div>
		);
	}
}
