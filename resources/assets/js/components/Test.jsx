import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => (
    <div>
        <div className="columns">
            <div className="column is-offset-2 is-8">
                <div className="card is-fullwidth">
                    <header className="card-header">
                        <p className="card-header-title">
                            Component
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <p className='red'>
                                {"This Is a test".substring(0,5)}
                            </p>
                            <br />
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">View</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
);

export default Landing;
