import React, { Component } from "react";
import { Modal } from "./Modal.style";
import Aux from "../../../hoc/Aux";
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  render () {
    return (
      <Aux>
	      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <Modal
          style={{
          transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
          }}
        >
        {this.props.children}
    </Modal>
  </Aux>
    );
  }
}

export default Modal;
