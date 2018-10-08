import React from "react";
import { Form, Field, FieldArray } from "formik";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";

export default props => (
	<Form>
		<Field
			label="Email"
			type="email"
			name="email"
			id="email"
			className="form-control"
			placeholder="Enter your email"
			component={CustomInput}
		/>
		<FieldArray
			name="categoryIds"
			render={arrayHelpers => (
				<CustomCheckbox {...props} arrayHelpers={arrayHelpers} />
			)}
		/>
		<FieldArray
			name="languages"
			render={arrayHelpers => (
				<CustomRadio {...props} arrayHelpers={arrayHelpers} />
			)}
		/>
		<button type="submit" className="btn btn-success">
			Submit
		</button>
	</Form>
);
