import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './buildControls.css';

const controls = [
	{ label: 'Berry', type: 'berry' },
	{ label: 'Topping', type: 'topping' },
];

const buildControls = (props) => {
	return (
		<div className="buildcontrols__container">
			<div className="buildcontrols__price">Current PRICE: {props.price.toFixed(2)}</div>
			{controls.map(ctrl => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdded(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]} />
			))}
			<div
				className="buildcontrols__order-button"
				disabled={props.purchasable}
				onClick={props.ordered}
			>
				ORDER NOW
			</div>
		</div>
	)
};

export default buildControls;
