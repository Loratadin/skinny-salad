import React from 'react';
import { Salad } from './SaladIngredient/Salad.style';
import SaladIngredient from './SaladIngredient/SaladIngredient';

const salad = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <SaladIngredient key={igKey + i} type={igKey} />;
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