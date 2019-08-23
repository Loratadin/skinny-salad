import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import "./layout.css";

class Layout extends Component {
    state = {
        showSideDrawer: false
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
        this.setState({showSideDrawer: !this.state.showSideDrawer })
    }

    render () {
        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <div className="content__container">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
};

export default Layout;