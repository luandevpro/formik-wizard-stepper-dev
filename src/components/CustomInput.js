import React from "react";
import ReactJson from "react-json-view";
import { ErrorMessage } from "formik";

export default props => (
	<div className="form-group">
		<label htmlFor={props.id}> {props.label} </label>
		<input {...props.field} type={props.type} className={props.className} />
		{/* <ReactJson src={props} /> */}
	</div>
);
