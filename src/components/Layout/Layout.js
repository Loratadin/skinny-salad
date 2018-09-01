import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.style.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    render () {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer closed={this.sideDrawerClosedHandler} />
                <Content>
                    {this.props.children}
                </Content>
    </Aux>
        )
    }
};

export default Layout;