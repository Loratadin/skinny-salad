import React , { Component } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer, SideDrawerLogoContainer } from './SideDrawer.style';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import './SideDrawer.css';

const toggleSideDrawerClass = () => {
    let mobileMenu = document.getElementsByName('side-drawer');
    mobileMenu.classList.toggle('open');
}
class sideDrawer extends Component  {
        render() {
    return (
        <Aux>
            <Backdrop show={this.props.open} clicked={this.props.closed}/>
            <SideDrawer id="side-drawer" className="closed" onClick={toggleSideDrawerClass}>
                <SideDrawerLogoContainer>
                    <Logo/>
                </SideDrawerLogoContainer>
                <nav>
                    <NavigationItems/>
                </nav>
            </SideDrawer>
        </Aux>
    );
    }
}
export default sideDrawer;