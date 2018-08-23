import React from 'react';
import { SaladBed } from './SaladIngredient.style.js';

const saladIngredient = (props) => {
	 let ingredient = null;
	 
	 switch (props.type) {
		 case ('salad-bed'):
		 ingredient = <SaladBed/>
	 }

};

export default saladIngredient;