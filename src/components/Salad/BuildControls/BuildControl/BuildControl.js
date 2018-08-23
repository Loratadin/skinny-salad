import React from 'react';
import { BuildControl, Label, BCButton } from './BuildControl.style';

const buildControl = (props) => {
 <BuildControl>
  <Label>{props.label}</Label>
  <BCButton>Less</BCButton>
  <BCButton>More</BCButton>
 </BuildControl>

};

export default buildControl;