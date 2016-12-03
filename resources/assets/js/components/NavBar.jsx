import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { closeNav, toggleNav } from '../actions/navbarActions';

@connect((store) => {
    return {
        open: store.navbar.open,
    };
})
class NavBar extends Component {

    componentDidMount() {
        document.body.addEventListener('click', () => {
            this.props.dispatch(closeNav());
        });
    }

    handleOnClick = () => {
        this.props.dispatch(toggleNav());
    };

    handleCloseNav = () => {
        this.props.dispatch(closeNav());
    };

    navClassNames = () =>
        classNames({
            'nav-menu': true,
            'nav-right': true,
            'is-active': this.props.open,
        });

    hamburgerClassNames = () =>
        classNames({
            'nav-toggle': true,
            'is-active': this.props.open,
        });


    render() {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <Link to="/" className="nav-item is-brand">
                        <h1 className="title is-1 navbar--brand">Penthious</h1>
                    </Link>
                </div>


                <span className={this.hamburgerClassNames()} onClick={this.handleOnClick}>
                    <span />
                    <span />
                    <span />
                </span>

                <div className={this.navClassNames()}>
                    <Link to="/" className="nav-item" onClick={this.handleCloseNav}>
                        Home
                    </Link>
                    <Link className="nav-item" to="projects" onClick={this.handleCloseNav}>
                        Projects
                    </Link>
                    <Link to="resume" className="nav-item" onClick={this.handleCloseNav}>
                        Resume
                    </Link>
                    <Link to="contact" className="nav-item" onClick={this.handleCloseNav}>
                        Contact
                    </Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
