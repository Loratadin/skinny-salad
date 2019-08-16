import React from 'react';
import "./button.css";

const button = (props) => (
<button onClick={props.clicked} className="button__container">{props.children}</button>
);

export default button;