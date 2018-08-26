import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer } from './SideDrawer.style';

const openDivStyle = {
    transform: 'translateX(0)'
};
const closeDivStyle = {
    transform: 'translateX(-100%)'
};
const sideDrawer = (props) => {
    //...
    return (
        <SideDrawer>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </SideDrawer>
    );
};

export default sideDrawer;