import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';
import BuildControls from '../../components/Salad/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Salad/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	saladBed: 1,
	berry: 0.7,
	topping: 0.2
}
class SaladBuilder extends Component {

	state = {
		ingredients: {
			saladBed: 0,
			topping: 0,
			berry: 0
		},
		totalPrice: 3,
		purchasable: false,
		purchasing: false,
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
				...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
	}
	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
				...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
	}

	purchaseHandler () {
		this.setState({purchasing: true});
	}

 	render() {
			const disabledInfo = {
					...this.state.ingredients
			};
			for (let key in disabledInfo) {
				disabledInfo[key] = disabledInfo[key] <= 0
			}
		 return (
			<Aux>
				<Modal>
					<OrderSummary ingredients={this.state.ingredients}/>
				</Modal>
				<Salad ingredients={this.state.ingredients}/>
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}/>
			</Aux>
		 );

 	}
}

export default SaladBuilder;