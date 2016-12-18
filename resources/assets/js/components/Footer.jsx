import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
                <p>Follow me on <a
                    className="about--underline"
                    href="https://github.com/penthious"
                    rel="noopener noreferrer"
                    target="_blank"
                >Github</a> or view this site&#39;s <a
                    className="about--underline"
                    href="https://github.com/Penthious/reactblog"
                    rel="noopener noreferrer"
                    target="_blank"
                >source code</a>
                </p>
                <div className="columns">
                    <div className="column">
                        <a
                            className="icon"
                            href="https://github.com/penthious"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-github" />
                        </a>
                        <div>
                            <a
                                href="https://github.com/penthious"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <a
                            className="icon"
                            href="https://www.freecodecamp.com/penthious"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-free-code-camp" />
                        </a>
                        <div>
                            <a
                                href="https://www.freecodecamp.com/penthious"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                FreeCodeCamp
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <a
                            className="icon"
                            href="https://codepen.io/Penthious/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-codepen" />
                        </a>
                        <div>
                            <a
                                href="https://codepen.io/Penthious/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Codepen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);


export default Footer;
