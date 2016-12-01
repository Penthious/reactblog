import React, {
    Component,
    PropTypes,
} from 'react';

import { Link } from 'react-router';

class Project extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <div className="column is-12-desktop is-12-tablet is-offset-3-mobile">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <Link to={this.props.link}>
                                    <img src={this.props.image} alt="" />
                                </Link>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32">
                                            <img src="http://placehold.it/64x64" alt="Image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="subtitle is-6">
                                        <a href={this.props.github}
                                           rel="noopener noreferrer"
                                           target="_blank">
                                            Code for {this.props.name}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="content">
                                <p>{this.props.description}</p>
                                <br />
                                <small>{this.props.created_at}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Project.propTypes    = {};
Project.defaultProps = {};

export default Project;
