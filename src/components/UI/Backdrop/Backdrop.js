import React from "react";
import { Backdrop } from "./Backdrop.style";

const backdrop = props => (props.show ? <Backdrop /> : null);

export default backdrop;
