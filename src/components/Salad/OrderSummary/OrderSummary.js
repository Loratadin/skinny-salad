import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
	componentWillUpdate() {
	}
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: "capitalize" }} value={igKey}>{igKey}</span>:{" "}
					{this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<React.Fragment>
				<h3>Your Order</h3>
				<p>Delicious Salad with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>Total Price: {this.props.price.toFixed(2)}</p>
				<p>Continue to Checkout?</p>
				<Button clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</React.Fragment>
		);
	}
}

export default OrderSummary;
