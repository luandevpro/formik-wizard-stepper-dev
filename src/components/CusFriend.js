import React from "react";
import { map } from "lodash";
import { Field, getIn } from "formik";

const ErrorMessage = ({ name, index }) => (
	<Field
		name={name}
		render={({ form }) => {
			console.log(form.errors.friends);
			const error = form.errors.friends;
			const touch = getIn(form.touched.friends, name);
			switch (typeof error) {
				case "string":
					return <div>{error}</div>;
				case "object":
					return <div>aqa</div>;
				default:
					return null;
			}
		}}
	/>
);
const FriendArrayErrors = errors =>
	typeof errors.friends === "string" ? <div>{errors.friends}</div> : null;
export default ({ values, arrayHelpers }) => (
	<div>
		{values.friends && values.friends.length > 0 ? (
			<div>
				{map(values.friends, (friends, index) => (
					<div key={index}>
						<ErrorMessage name={`friends[${index}]name`} index={index} />
						<Field name={`friends[${index}]name`} />
						<Field name={`friends[${index}].salary`} />
						<button
							type="button"
							onClick={() => arrayHelpers.remove(index)}
						>
							-
						</button>
						<button
							type="button"
							onClick={() => arrayHelpers.push({ name: "", salary: "" })}
						>
							+
						</button>
					</div>
				))}
			</div>
		) : (
			<button
				type="button"
				onClick={() => arrayHelpers.push({ name: "", email: "" })}
			>
				add friends
			</button>
		)}
		<button type="submit">add sub</button>
	</div>
);
