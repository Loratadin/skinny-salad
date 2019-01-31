import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from './NavigationItem.style';

const navigationItem = (props) => (
    <NavigationItem>
        <NavLink
            to={props.link}>{props.children}</NavLink>
    </NavigationItem>
);

export default navigationItem;