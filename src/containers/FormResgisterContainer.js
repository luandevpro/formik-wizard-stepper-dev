import React, { Component } from "react";
import { Consumer } from "../contexts";
import FormResgister from "../components/FormResgister";

export default class FormResgisterContainer extends Component {
	render() {
		return <Consumer>{value => <FormResgister {...value} />}</Consumer>;
	}
}
