import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';
import BuildControls from '../../components/Salad/BuildControls/BuildControls';

class SaladBuilder extends Component {

	state = {
		ingredients: {
			saladBed: 1,
			topping: 1,
			berry: 1
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