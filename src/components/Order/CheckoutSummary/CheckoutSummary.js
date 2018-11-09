import React from 'react';
import Salad from '../../Salad/Salad';
import Button from '../../UI/Button/Button';
import  './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope you will enjoy!</h1>
            <Salad  ingredients={props.ingredients}/>
            <Button clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary; 