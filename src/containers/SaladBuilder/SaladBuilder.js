import React, { Component } from 'react';
import Salad from '../../components/Salad/Salad';
import BuildControls from '../../components/Salad/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Salad/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
	saladBed: 1,
	berry: 0.7,
	topping: 0.2
}
class SaladBuilder extends Component {
state = {
	ingredients: null,
	totalPrice: 3,
	purchasable: false,
	purchasing: false,
	error: false,
}

componentDidMount () {
	axios.get('https://react-skinny-salad.firebaseio.com/orders/ingredients.json')
		.then( response => {
			this.setState({ingredients: response.data});
		})
		.catch(error => {
			this.setState({error: true})
		});
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

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {
		const queryParams = [ ];
		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	}

 	render() {
			const disabledInfo = {
					...this.state.ingredients
			};
			for (let key in disabledInfo) {
				disabledInfo[key] = disabledInfo[key] <= 0
			}
		let orderSummary = null;
		let salad = this.state.error ? <p>Ingredient's can't be loaded!</p> : <Spinner/>;
		if (this.state.ingredients) {
			salad = (
				<React.Fragment>
					<Salad ingredients={this.state.ingredients}/>
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						purchasable={this.state.purchasable}
						ordered={this.purchaseHandler}
						price={this.state.totalPrice}/>
				</React.Fragment>
			);
			orderSummary = <OrderSummary
				ingredients={this.state.ingredients}
				price={this.state.totalPrice}
				purchaseCancelled={this.purchaseCancelHandler}
				purchaseContinued={this.purchaseContinueHandler}/>
		}
		 return (
			<React.Fragment>
				 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
				{/* only if purchasing is true Modal should be visible*/}
				{orderSummary}
				</Modal>
				{salad}
			</React.Fragment>
		 );

 	}
}

export default withErrorHandler(SaladBuilder, axios);