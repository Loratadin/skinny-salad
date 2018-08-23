import React from 'react';
import { Salad } from './SaladIngredient/Salad.style';
import SaladIngredient from './SaladIngredient/SaladIngredient';

const salad = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
	//keys method will transform our object 'ingredients' into array
		.map(igKey => {
			//map method will execute a function on each element of the array
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				//returns an array with as many elements as there stated in ingredients
				return <SaladIngredient key={igKey + i} type={igKey} />;
				//igKey is a name of an ingredient and i is the quontity
			});
		});
 	return (
		<Salad>
			<SaladIngredient type="topping" />
			{transformedIngredients}
			<SaladIngredient type="salad-bed" />
		</Salad>
	);
};

export default salad;