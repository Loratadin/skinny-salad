import React, { Component } from 'react';
import { SaladBed, Topping, BerryContainer, BlueBerry, CranBerry } from './SaladIngredient.style.js';
import PropTypes from 'prop-types';
class SaladIngredient extends Component {
	render () {
		let ingredient = null;
	 
			switch (this.props.type) {
				case ('salad-bed'):
					ingredient = <SaladBed/>;
					break;
				case ('topping'): 
					ingredient = <Topping/>;
					break;
				case ('berry'): 
					ingredient = (
						<BerryContainer>
							<BlueBerry/>
							<CranBerry/>		
						</BerryContainer>
					);
					break;
				default:
					ingredient = null;
	 		}
			 
			 return ingredient;
    }
}

SaladIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default SaladIngredient;