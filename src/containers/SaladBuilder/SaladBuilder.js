import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Salad from '../../components/Salad/Salad';

class SaladBuilder extends Component {
 	render() {
		 return (
			<Aux>
				<Salad/>
				<div>Build Controls</div>
			</Aux>
		 );

 	}
}

export default SaladBuilder;