import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './toolbar.css';

const toolbar = (props) => (
    <div className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className="toolbar__logo-container">
            <Logo />
        </div>
        <div className="toolbar__navigation-desktop-only">
            <NavigationItems/>
        </div>
    </div>
);

export default toolbar;