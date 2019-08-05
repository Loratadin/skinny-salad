import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationItem.css';

const navigationItem = (props) => (
    <div className="navigation__item">
        <NavLink to={props.link} className="navigation__link">{props.children}</NavLink>
    </div>
);

export default navigationItem;