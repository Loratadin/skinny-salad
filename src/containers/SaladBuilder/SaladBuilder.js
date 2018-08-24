import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';
import BuildControls from '../../components/Salad/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	saladBed: 1,
	berry: 0.7,
	topping: 0.2
}
class SaladBuilder extends Component {

	state = {
		ingredients: {
			saladBed: 1,
			topping: 1,
			berry: 1
		},
		totalPrice: 3
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

 	render() {
		 return (
			<Aux>
				<Salad ingredients={this.state.ingredients}/>
				<BuildControls
					ingredientAdded={this.addIngredientHandler}/>
			</Aux>
		 );

 	}
}

export default SaladBuilder;