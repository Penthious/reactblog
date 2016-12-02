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
                    <a className="nav-item is-brand" href="#">
                        <h1><strong>Tomas's Blog</strong></h1>
                    </a>
                </div>

                <div className="nav-center">
                    <a className="nav-item" href="#">
                        <span className="icon">
                          <i className="fa fa-github" />
                        </span>
                    </a>
                    <a className="nav-item" href="#">
                        <span className="icon">
                            <i className="fa fa-twitter" />
                        </span>
                    </a>
                </div>

                <span className={this.hamburgerClassNames()} onClick={this.handleOnClick}>
                    <span></span>
                    <span></span>
                    <span></span>
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
