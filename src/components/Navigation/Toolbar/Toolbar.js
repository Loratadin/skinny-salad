import React from 'react';
import { Toolbar } from './Toolbar.style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <Toolbar>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems/>
        </nav>
    </Toolbar>
);

export default toolbar;