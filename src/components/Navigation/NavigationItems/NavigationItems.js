import React from 'react';
import { NavigationItems } from './NavigationItems.style';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <NavigationItems>
        <NavigationItem link="/">Salad Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </NavigationItems>
);

export default navigationItems;