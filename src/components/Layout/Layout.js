import React from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.style.js';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop </div>
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout;