import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';
import BuildControls from '../../components/Salad/BuildControls/BuildControls';

class SaladBuilder extends Component {

	state = {
		ingredients: {
			saladBed: 0,
			topping: 0,
			berry: 0
		}
	}
 	render() {
		 return (
			<Aux>
				<Salad ingredients={this.state.ingredients}/>
				<BuildControls/>
			</Aux>
		 );

 	}
}

export default SaladBuilder;