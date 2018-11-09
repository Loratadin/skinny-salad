import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import './ContactData.css';

class ContactData extends Component {
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            zip: ' ',
            city: ' ',
        }
    }
    render() {
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your name"/>
                    <input className="Input" type="email" name="email" placeholder="Your email"/>
                    <input className="Input" type="text" name="city" placeholder="Your city"/>
                    <input className="Input" type="text" name="street" placeholder="Your street"/>
                    <input className="Input" type="number" name="zip" placeholder="Your zip code"/>
                    <Button>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;