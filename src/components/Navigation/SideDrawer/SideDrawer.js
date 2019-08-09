import React , { Component } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

class sideDrawer extends Component  {
    state = {
        isDrawerVisible: true,
    }
    toggleSideDrawer = () => {
        this.setState({isDrawerVisible: !this.state.isDrawerVisible})
    }
    render() {
            const { isDrawerVisible } = this.state
    return (
        <div>
            {isDrawerVisible && (
                <div>
                    <Backdrop show={this.props.open} clicked={this.props.closed}/>
                        <div id="side-drawer"  onClick={this.toggleSideDrawer} className="side-drawer">
                            <div className="side-drawer__logo-container">
                                <Logo/>
                            </div>
                            <nav>
                                <NavigationItems/>
                            </nav>
                        </div>
                </div>
            )}
        </div>
    );
    }
}
export default sideDrawer;