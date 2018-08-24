import React from 'react';
import { Button } from './Button.style.js';

const button = (props) => (
<Button onClick={props.clicked}>{props.children}</Button>
);

export default button;