import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import '../../sass/app.sass';

const Layout = props => (
    <div className="siteLayout">
        <NavBar />

        <main className="section">
            <div className="container test">
                {props.children}
            </div>
        </main>
        <Footer />
    </div>
);

export default Layout;
