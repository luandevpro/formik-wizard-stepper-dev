import React, { Component } from "react";
import { Provider } from "./contexts";

export default class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [{ name: "EN" }, { name: "VI" }, { name: "CN" }],
			categories: [
				{
					name: "Let Her Go",
					image:
						"https://a0.muscache.com/im/pictures/76e52436-ee61-4598-8868-f187a55720e8.jpg?aki_policy=xx_large",
				},
				{
					name: "Despacito",
					image:
						"https://a0.muscache.com/im/pictures/36d4b8d3-134a-4e42-afcf-eae717f5ab36.jpg?aki_policy=x_large",
				},
				{
					name: "Fade",
					image:
						"https://a0.muscache.com/im/pictures/82b8bcf5-1210-4229-956f-8e9a606db11f.jpg?aki_policy=x_large",
				},
			],
		};
	}
	render() {
		var { children } = this.props;
		return (
			<Provider value={this.state}>
				<div className="container">{children}</div>
			</Provider>
		);
	}
}
