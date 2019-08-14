import React, { Component } from 'react';
import { SaladBed, Topping, BerryContainer, BlueBerry, CranBerry } from './SaladIngredient.style.js';
import PropTypes from 'prop-types';
import './saladIngredient.css';
class SaladIngredient extends Component {
	render () {
		let ingredient = null;

			switch (this.props.type) {
				case ('salad-bed'):
					ingredient = <div className="salad-ingredient__salad-bed"/>;
					break;
				case ('topping'):
					ingredient = <div className="salad-ingredient__salad-topping"/>;
					break;
				case ('berry'):
					ingredient = (
						<div className="salad-ingredient__salad-berries-wrapper">
							<div className="salad-ingredient__salad-berries-blueberry"/>
							<div className="salad-ingredient__salad-berries-cranberry"/>
						</div>
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