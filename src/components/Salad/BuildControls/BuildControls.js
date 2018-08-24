import React from 'react';
import { BuildControls } from './BuildControls.style';
import BuildControl from './BuildControl/BuildControl';

const controls = [
 { label: 'Berry', type: 'berry' },
 { label: 'Topping', type: 'topping' },
];

const buildControls = (props) => {
 return (
  <BuildControls>
  {controls.map(ctrl => (
   <BuildControl key={ctrl.label} label={ctrl.label} />
  ))}
 </BuildControls>
 )
};

export default buildControls;
