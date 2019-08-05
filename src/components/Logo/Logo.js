import React from 'react';
import saladLogo from '../../assets/images/logo.png';
import './logo.css';

const logo = (props) => (
    <div className="logo__wrap">
        <img src={saladLogo} alt="SkinnySalad" className="logo__image"/>
    </div>
);

export default logo;