import React from 'react';
import { Link } from 'react-router';


const Landing = () => (
    <div>
        <div className="columns">
            <div className="column is-offset-2 is-8">
                <div className="card is-fullwidth">
                    <header className="card-header">
                        <p className="card-header-title">
                            Component
                        </p>
                        <a className="card-header-icon">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a
                            href="#">@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br />
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">Save</a>
                        <a className="card-footer-item">Edit</a>
                        <a className="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
            <div className="is-2">
            </div>
        </div>

        <div className="columns">
            <div className="column is-offset-2 is-8">
                <div className="card is-fullwidth">
                    <header className="card-header">
                        <p className="card-header-title">
                            Component
                        </p>
                        <a className="card-header-icon">
                            <i className="fa fa-angle-down"></i>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a
                                href="#">@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br />
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">Save</a>
                        <a className="card-footer-item">Edit</a>
                        <a className="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
);

export default Landing;
