import React from 'react';
import { Modal } from './Modal.style';

const modal = (props) => (
 <Modal style={{
  transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
  opacity: props.show ? '1' : '0',
 }}>
  {props.children}
 </Modal>
);

export default modal;