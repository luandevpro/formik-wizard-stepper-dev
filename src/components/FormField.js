import React, { Component } from "react";
import { Form, Field, FieldArray } from "formik";
import * as Types from "../constants/ActionTypes";
import CustomInput from "./CustomInput";
import ReactJson from "react-json-view";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";

export default class FormField extends Component {
	render() {
		const activePage = React.Children.toArray(this.props.children)[
			this.props.activeStepIndex
		];
		const isLastPage =
			this.props.activeStepIndex ===
			React.Children.count(this.props.children) - 1;
		return (
			<Form>
				{activePage}
				<div className="buttons">
					{this.props.activeStepIndex > 0 && (
						<button
							type="button"
							className="btn btn-primary btn-lg  mr-3"
							onClick={() =>
								this.props.dispatchOnNextStep({
									type: Types.ON_NEXT_STEP,
									payload: 1,
								})
							}
						>
							« Previous
						</button>
					)}

					{!isLastPage && (
						<button type="submit" className="btn btn-success btn-lg">
							Next
						</button>
					)}
					{isLastPage && (
						<button
							type="submit"
							className="btn btn-success btn-lg"
							disabled={this.props.isSubmitting}
						>
							Submit
						</button>
					)}
				</div>
			</Form>
		);
	}
}
