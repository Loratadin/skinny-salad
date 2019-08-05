import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import  './navigationItems.css';

const navigationItems = (props) => (
    <div className="navigation__items">
        <NavigationItem link="/">Salad Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </div>
);

export default navigationItems;