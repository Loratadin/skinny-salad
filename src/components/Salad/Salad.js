import React from 'react';
import { withRouter } from 'react-router-dom';
import { Salad } from './SaladIngredient/Salad.style';
import SaladIngredient from './SaladIngredient/SaladIngredient';

const salad = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
	//keys method will transform our object 'ingredients' into array
		.map(igKey => {
			//map method will execute a function on each element of the array
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				//returns an array with as many elements as there stated in ingredients
				return <SaladIngredient key={igKey + i} type={igKey} />;
				//igKey is a name of an ingredient and i is the quontity
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);
		if (transformedIngredients.length === 0) {
			transformedIngredients = <p>Please start adding ingredients!</p>;
		}
 	return (
		<Salad>
			<SaladIngredient type="topping" />
			{transformedIngredients}
			<SaladIngredient type="salad-bed" />
		</Salad>
	);
};

export default withRouter(salad);