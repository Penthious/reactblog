import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = props => (
    <div className="siteLayout">
        <NavBar />

        <div className="section">
            <div className="container">
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
);

export default Layout;
