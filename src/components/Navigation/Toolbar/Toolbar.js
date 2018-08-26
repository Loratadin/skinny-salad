import React from 'react';
import { Toolbar, ToolbarLogoContainer } from './Toolbar.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <Toolbar>
        <div>MENU</div>
        <ToolbarLogoContainer>
            <Logo />
        </ToolbarLogoContainer>
        <nav>
            <NavigationItems/>
        </nav>
    </Toolbar>
);

export default toolbar;