import React, { Component } from "react";
import Backdrop from '../Backdrop/Backdrop';
import "./modal.css";

class Modal extends Component {
	render() {
		const { show, modalClosed } = this.props;
		return (
			<React.Fragment>
				<Backdrop show={show} clicked={modalClosed} />
				<div className={`modal-hidden ${show && "modal-visible"}`}>
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
}

export default Modal;
