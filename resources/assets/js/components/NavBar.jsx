import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }


    handleOnClick = () => {
        this.setState({
            active: !this.state.active,
        });
    };

    navClassNames = () =>
        classNames({
            'nav-menu': true,
            'nav-right': true,
            'is-active': this.state.active,
        });

    hamburgerClassNames = () =>
        classNames({
            'nav-toggle': true,
            'is-active': this.state.active,
        });


    render() {
        return (
            <nav className="nav">
                <div className="nav-left">
                    <Link to="/" className="nav-item is-brand">
                        <h1 className="title is-1">Penthious</h1>
                    </Link>
                </div>


                <span className={this.hamburgerClassNames()} onClick={this.handleOnClick}>
                    <span />
                    <span />
                    <span />
                </span>

                <div className={this.navClassNames()}>
                    <Link to="/" className="nav-item">
                        Home
                    </Link>
                    <Link className="nav-item" to="projects">
                        Projects
                    </Link>
                    <Link to="resume" className="nav-item" >
                        Resume
                    </Link>
                    <Link to="contact" className="nav-item">
                        Contact
                    </Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;
