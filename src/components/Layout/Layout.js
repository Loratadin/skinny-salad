import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop </div>
        <main>
            {PaymentResponse.children}
        </main>
    </Aux>
);

export default layout;