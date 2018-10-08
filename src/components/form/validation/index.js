import emailValidator from "./emailValidator";
import languageValidator from "./languageValidator";
import songValidator from "./songValidator";

export { emailValidator, languageValidator, songValidator };

// export const validationSchema = () =>
// 	Yup.object().shape({
// 		email: Yup.string()
// 			.email("Email not valid")
// 			.required("Email is Required"),
// 		// categoryIds: Yup.array().required("At least one color is required"),
// 		// languages: Yup.array().required("At least one languages"),
// 		// friends: Yup.array()
// 		// 	.of(
// 		// 		Yup.object().shape({
// 		// 			name: Yup.string()
// 		// 				.min(4, "too short")
// 		// 				.required("Required"), // these constraints take precedence
// 		// 			salary: Yup.string()
// 		// 				.min(3, "cmon")
// 		// 				.required("Required"), // these constraints take precedence
// 		// 		})
// 		// 	)
// 		// 	.required("Must have friends") // these constraints are shown if and only if inner constraints are satisfied
// 		// 	.min(3, "Minimum of 3 friends"),
// 		// password: Yup.string()
// 		// 	.min(9, "Password must be at least 9")
// 		// 	.max(24, "Password too long")
// 		// 	.required("Password is Required"),
// 		// topics: Yup.array()
// 		// 	.min(1, "Pick at least 1 tags")
// 		// 	.of(
// 		// 		Yup.object().shape({
// 		// 			label: Yup.string().required(),
// 		// 			value: Yup.string().required(),
// 		// 		})
// 		// 	),
// 		// gender: Yup.string().required("Gender is Required"),
// 		// terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
// 		// checkboxGroup: Yup.array().required("At least one color is required"),
// 	});
