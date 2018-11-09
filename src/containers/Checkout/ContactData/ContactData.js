import React, { Component } from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import './ContactData.css';

class ContactData extends Component {
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            zip: ' ',
            city: ' ',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( {loading: true} );
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Tania Shulga',
				address: {
					street: 'TestStreet',
					zipCode: '37287',
					city: 'McKinney'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then(response => {
                this.setState( {loading: false} );
                this.props.history.push('/');
			})
			.catch(error => {
				this.setState( {loading: false} );
			});
    }
    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your name"/>
                <input className="Input" type="email" name="email" placeholder="Your email"/>
                <input className="Input" type="text" name="city" placeholder="Your city"/>
                <input className="Input" type="text" name="street" placeholder="Your street"/>
                <input className="Input" type="number" name="zip" placeholder="Your zip code"/>
                <Button clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;