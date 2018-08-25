import React from 'react';
import saladLogo from '../../assets/images/logo.png';
import { Logo } from './Logo.style';

const logo = (props) => (
    <Logo>
        <img src={saladLogo} alt="SkinnySalad"/>
    </Logo>
);

export default logo;