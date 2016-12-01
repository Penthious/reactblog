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
                    <a className="nav-item" href="/">
                        Home
                    </a>
                    <a className="nav-item">
                        <Link to='calculator'>
                       Projects
                              </Link>
                    </a>
                    <a className="nav-item" href="#">
                        Resume
                    </a>
                    <a className="nav-item" href="#">
                        Contact
                    </a>
                    <span className="nav-item">
                        <a className="button">
                            <span className="icon">
                                <i className="fa fa-twitter" />
                            </span>
                            <span>Tweet</span>
                        </a>
                        <a className="button is-primary" href="#">
                            <span className="icon">
                                <i className="fa fa-download" />
                            </span>
                            <span>Download</span>
                        </a>
                    </span>
                </div>
            </nav>

        );
    }
}

export default NavBar;
