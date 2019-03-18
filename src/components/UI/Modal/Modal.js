import React, { Component } from "react";
import { ModalStyle } from "./Modal.style";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	if (nextProps.show !== prevState.show || nextProps.children !== prevState.children) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<ModalStyle
					style={{
						transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
						opacity: this.props.show ? "1" : "0"
					}}
				>
					{this.props.children}
				</ModalStyle>
			</Aux>
		);
	}
}

export default Modal;
