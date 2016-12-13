import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Project = props => (
    <div className="project--card-container">
        <div
            className="column is-12-desktop is-12-tablet is-offset-2-mobile is-9-mobile project--height"
        >
            <div className="card project--height">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <Link to={props.link}>
                            <img src={props.image} alt="" />
                        </Link>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="subtitle is-6">
                                <a
                                    href={props.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Code for {props.name}
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="content">
                        <p className="project--p-height">{props.description}</p>
                        <br />
                        <small>{props.created_at}</small>
                    </div>
                    <Link
                        to={props.link}
                        className="button is-primary project--margin"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Project.propTypes = {
    link: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    github: PropTypes.string,
    image: PropTypes.string,
};
Project.defaultProps = {};

export default Project;
