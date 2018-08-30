import React from 'react';
import { Toolbar, ToolbarLogoContainer, DesktopOnly } from './Toolbar.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <Toolbar>
        <div>MENU</div>
        <ToolbarLogoContainer>
            <Logo />
        </ToolbarLogoContainer>
        <DesktopOnly>
            <NavigationItems/>
        </DesktopOnly>
    </Toolbar>
);

export default toolbar;