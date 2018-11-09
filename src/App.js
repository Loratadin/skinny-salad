import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import SaladBuilder from './containers/SaladBuilder/SaladBuilder';
import Checkout from './containers/Checkout/Checkout';
class App extends Component {
  render() {
    return (
      	<div>
			<Layout>
				<SaladBuilder/>
				<Checkout />
			</Layout>
      	</div>
    );
  }
}

export default App;
