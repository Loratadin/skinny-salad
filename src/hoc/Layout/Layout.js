import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import { Content } from './Layout.style.js';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
      
    showSideDrawer = () => {
        this.toggleSideDrawer();
        const {show} = this.state;
        this.setState( { show: !show } )
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer };
        });
    }
    
    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                />
                <Content>
                    {this.props.children}
                </Content>
            </Aux>
        )
    }
};

export default Layout;