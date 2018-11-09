import React from 'react';
import Salad from '../../Salad/Salad';
import Button from '../../UI/Button/Button';
import  './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope you will enjoy!</h1>
            {/* <div style={{width: '100%', margin: 'auto'}}> */}
                <Salad  ingredients={props.ingredients}/>
            {/* </div> */}
            <Button clicked>CANCEL</Button>
            <Button clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary; 