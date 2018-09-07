import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.style.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.menuWrapperClasses = ['menu-wrapper'];
    //     this.state = { show: false };
    //     this.showSideDrawer = this.showSideDrawer.bind(this)
    //   }
      
    //   showSideDrawer = () => {
    //     this.toggleSideDrawer();
    //     const {show} = this.state;
    //     this.setState( { show: !show } )
    //   }
      
    //   toggleSideDrawer = () => {
    //     if (this.sideDrawerClasses.length === 1) {
    //       this.sideDrawerClasses.push('open');
    //     } else {
    //       this.menuWrapperClasses.pop();
    //     }
    //   }
    // state = {
    //     showSideDrawer: true
    // }
    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false});
    // }
    render () {
        return (
            <Aux>
                <Toolbar/>
                {/* <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} /> */}
                <Content>
                    {this.props.children}
                </Content>
    </Aux>
        )
    }
};

export default Layout;