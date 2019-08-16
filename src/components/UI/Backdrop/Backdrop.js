import React from "react";
import "./backdrop.css";

const backdrop = props => (props.show ? <div onClick={props.clicked} className="backdrop__container"/> : null);

export default backdrop;
