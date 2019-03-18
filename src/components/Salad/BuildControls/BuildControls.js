import React from 'react';
import { BuildControls, Price, OrderButton } from './BuildControls.style';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Berry', type: 'berry' },
	{ label: 'Topping', type: 'topping' },
];

const buildControls = (props) => {
	return (
		<BuildControls>
			<Price>Current PRICE: {props.price.toFixed(2)}</Price>
			{controls.map(ctrl => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]} />
			))}
			<OrderButton
				disabled={props.purchasable}
				onClick={props.ordered}>ORDER NOW</OrderButton>
		</BuildControls>
	)
};

export default buildControls;
