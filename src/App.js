import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import SaladBuilder from './containers/SaladBuilder/SaladBuilder';
import Checkout from './containers/Checkout/Checkout';
class App extends Component {
  render() {
    return (
      	<div>
					<Layout>
						<Switch>
							<Route path="/checkout" component={Checkout} />
							<Route path="/" exact component={SaladBuilder} />
						</Switch>
					</Layout>
      	</div>
    );
  }
}

export default App;
