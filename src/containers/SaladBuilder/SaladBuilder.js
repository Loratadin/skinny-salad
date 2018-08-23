import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';

class SaladBuilder extends Component {

	state = {
		ingredients: {
			saladBed: 1,
			topping: 2,
			berry: 1
		}
	}
 	render() {
		 return (
			<Aux>
				<Salad ingredients={this.state.ingredients}/>
				<div>Build Controls</div>
			</Aux>
		 );

 	}
}

export default SaladBuilder;