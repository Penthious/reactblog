import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import '../../sass/app.sass';

const Layout = props => (
    <div className="site--layout">
        <NavBar />

        <main className="section">
            <div className="container site--container">
                {props.children}
            </div>
        </main>
        <Footer />
    </div>
);

export default Layout;
