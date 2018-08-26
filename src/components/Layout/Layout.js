import React from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.style.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout;