import React from 'react';
import NavBar from './NavBar';

const Layout = props => (
    <div>
        <NavBar />
        {props.children}
    </div>
);

export default Layout;
