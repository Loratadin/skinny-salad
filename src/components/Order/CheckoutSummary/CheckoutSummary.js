import React from 'react';
import Salad from '../../Salad/Salad';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you will enjoy!</h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
                <Salad ingredients={props.ingredients}/>
            </div>
            <Button 
                style={{color: 'red'}}
                clicked>CANCEL</Button>
            <Button 
                style={{color: 'green'}}
                clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary; 