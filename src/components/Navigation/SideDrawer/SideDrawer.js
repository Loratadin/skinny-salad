import React , { Component } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawer, SideDrawerLogoContainer } from './SideDrawer.style';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import './SideDrawer.css';

class sideDrawer extends Component  {
    constructor(props) {
        super(props);

        // const showSideDrawer = () => {
        //     this.toggleSideDrawer();
        //     const {show} = this.state;
        //     this.setState( { show: !show } )
        //     }
        // const toggleSideDrawer = () => {
        //     if (this.sideDrawerClasses.length === 1) {
        //         this.sideDrawerClasses.push('open');
        //     } else {
        //         this.menuWrapperClasses.pop();
        //     }
            // }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <SideDrawer >
                <SideDrawerLogoContainer>
                    <Logo/>
                </SideDrawerLogoContainer>
                <nav>
                    <NavigationItems/>
                </nav>
            </SideDrawer>
        </Aux>
    );
    }
    }   

export default SideDrawer;