import React from 'react';
import { Toolbar, ToolbarLogoContainer, DesktopOnly } from './Toolbar.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <Toolbar>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <ToolbarLogoContainer>
            <Logo />
        </ToolbarLogoContainer>
        <DesktopOnly>
            <NavigationItems/>
        </DesktopOnly>
    </Toolbar>
);

export default toolbar;