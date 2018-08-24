import React from 'react';
import { Backdrop } from './Backdrop.style';

const backdrop = (props) => (
 props.show ? <Backdrop></Backdrop> : null
);

export default backdrop;