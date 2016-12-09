import React, {
    Component,
    PropTypes,
} from 'react';

class PrivateRepo extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-two-thirds is-offset-2">
                    <div className="box portfolio">
                        <article className="media">
                            <div className="columns">
                                <div className="column is-5 is-flex image-column">
                                    <div className="media-left is-flex">
                                        <figure className="image-container">
                                            <img src={this.props.image} alt={this.props.image} />
                                        </figure>
                                    </div>
                                </div>
                                <div className="column is-7">
                                    <div className="media-content is-flex-mobile media-flex">
                                        <div className="content is-flex">
                                            <p className="project-description">
                                                <strong>{this.props.name}</strong>
                                                {this.props.description}
                                            </p>
                                            <div className="project-technologies">
                                                <p><strong>Technologies used:</strong>
                                                    {this.props.tech}
                                                </p>
                                                {this.props.link ?
                                                    <a
                                                        href={this.props.link}
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
    }
}

PrivateRepo.propTypes    = {};
PrivateRepo.defaultProps = {};

export default PrivateRepo;
