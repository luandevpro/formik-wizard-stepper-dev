import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";

var languages = [];

export default ({ values, arrayHelpers, languages }) => (
	<div>
		{languages.map((languages, index) => (
			<CustomWrappers key={index}>
				<input
					type="radio"
					id={languages.name}
					name="languages"
					checked={values.languages.includes(languages.name)}
					onChange={e => {
						if (e.target.checked && values.languages.length === 0)
							arrayHelpers.push(languages.name);
						else {
							arrayHelpers.replace(0, languages.name);
						}
					}}
				/>
				<label htmlFor={languages.name}>{languages.name}</label>
			</CustomWrappers>
		))}
		<ErrorMessage
			name="languages"
			render={msg => <div className="text-danger">{msg}</div>}
		/>
	</div>
);

export const CustomWrappers = styled.div`
	input[type="radio"] {
		display: none;
	}
	label:before {
		content: "\f1db";
		font-family: "FontAweSome";
		font-size: 26px;
	}
	input[type="radio"]:checked + label:before {
		content: "\f058";
		font-family: "FontAweSome";
		font-size: 26px;
		color: blue;
	}
`;
