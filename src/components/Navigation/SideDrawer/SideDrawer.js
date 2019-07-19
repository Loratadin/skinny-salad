import React , { Component } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer, SideDrawerLogoContainer } from './SideDrawer.style';
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
                        <SideDrawer id="side-drawer"  onClick={this.toggleSideDrawer}>
                            <SideDrawerLogoContainer>
                                <Logo/>
                            </SideDrawerLogoContainer>
                            <nav>
                                <NavigationItems/>
                            </nav>
                        </SideDrawer>
                </div>
            )}
        </div>
    );
    }
}
export default sideDrawer;