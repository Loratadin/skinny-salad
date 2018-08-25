import React from 'react';
import { NavigationItem } from './NavigationItem.style';

const navigationItem = (props) => (
    <NavigationItem>
        <a href={props.link}>{props.children}</a>
    </NavigationItem>
);

export default navigationItem;