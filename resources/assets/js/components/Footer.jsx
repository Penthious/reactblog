import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
                <p>Follow me on Github or view this site&#39;s source code</p>
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
                            <a href="https://github.com/penthious">Github</a>
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
                            <a href="https://www.freecodecamp.com/penthious">FreeCodeCamp</a>
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
                            <a href="https://codepen.io/Penthious/">Codepen</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
