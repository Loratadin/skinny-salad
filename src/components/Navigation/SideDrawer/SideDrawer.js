import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer, SideDrawerLogoContainer } from './SideDrawer.style';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const openDivStyle = {
    transform: 'translateX(0)'
};
const closeDivStyle = {
    transform: 'translateX(-100%)'
};
const sideDrawer = (props) => {
    //...
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <SideDrawer>
                <SideDrawerLogoContainer>
                    <Logo/>
                </SideDrawerLogoContainer>
                <nav>
                    <NavigationItems/>
                </nav>
            </SideDrawer>
        </Aux>
    );
};

export default sideDrawer;