import React from 'react';
import { Salad } from './SaladIngredient/Salad.style';
import SaladIngredient from './SaladIngredient/SaladIngredient';

const salad = (props) => {
 	return (
		<Salad>
			<SaladIngredient type="topping" />
			<SaladIngredient type="berry" />
			<SaladIngredient type="salad-bed" />
		</Salad>
	);
};

export default salad;