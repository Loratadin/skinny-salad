import React from 'react';
import { Toolbar } from './Toolbar.style';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <Toolbar>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </Toolbar>
);

export default toolbar;