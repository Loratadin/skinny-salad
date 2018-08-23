import React from 'react';
import { SaladBed, Topping, Berry } from './SaladIngredient.style.js';

const saladIngredient = (props) => {
	 let ingredient = null;
	 
	 switch (props.type) {
		case ('salad-bed'):
		 	ingredient = <SaladBed/>;
		 	break;
		case ('topping'): 
			ingredient = <Topping/>;
			break;
		case ('berry'): 
			ingredient = <Berry/>;
			break;
	 }

};

export default saladIngredient;