import React from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.style.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <Content>
            {props.children}
        </Content>
    </Aux>
);

export default layout;