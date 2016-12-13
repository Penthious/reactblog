import React, { PropTypes } from 'react';

const PrivateRepo = props => (
    <div className="columns">
        <div className="column is-two-thirds is-offset-2">
            <div className="box portfolio">
                <article className="media">
                    <div className="columns">
                        <div className="column is-5 is-flex image-column">
                            <div className="media-left is-flex">
                                <figure className="image-container">
                                    <img src={props.image} alt={props.image} />
                                </figure>
                            </div>
                        </div>
                        <div className="column is-7">
                            <div className="media-content is-flex-mobile media-flex">
                                <div className="content is-flex">
                                    <p className="project-description">
                                        <strong>{props.name}</strong>
                                        {props.description}
                                    </p>
                                    <div className="project-technologies">
                                        <p><strong>Technologies used:</strong>
                                            {props.tech}
                                        </p>
                                        {props.link ?
                                            <a
                                                href={props.link}
                                                className="is-flex github-container"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <i
                                                    className="fa fa-github"
                                                    aria-hidden="true"
                                                />
                                                <span className="github-span">Public Repo</span>
                                            </a>

                                            :

                                            <div className="is-flex github-container">
                                                <span
                                                    className="github-span"
                                                >
                                                    Private Repo
                                                </span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
);

PrivateRepo.propTypes = {
    link: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    tech: PropTypes.string,
};
PrivateRepo.defaultProps = {};

export default PrivateRepo;
