import React from 'react';
import { BuildControl, BCButton } from './BuildControl.style';

const buildControl = (props) => {
 <BuildControl>
  <div>{props.label}</div>
  <BCButton>Less</BCButton>
  <BCButton>More</BCButton>
 </BuildControl>

};

export default buildControl;