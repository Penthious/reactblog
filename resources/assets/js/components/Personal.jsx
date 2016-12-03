import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import projectsData from '../projectsData';

class Projects extends Component {

    allProjects = () => projectsData;


    render() {
        return (
            <div>
                <div className="column is-12-desktop is-12-tablet is-offset-2-mobile is-9-mobile project--height">
                    <div className="card project--height">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <a href={this.props.link}>
                                    <img src={this.props.image} alt="" target="_blank" />
                                </a>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <p>{this.props.description}</p>
                                <br />
                                <small>{this.props.created_at}</small>
                            </div>
                        </div>

                        <div>
                            <a href={this.props.link} className="button is-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Projects.propTypes = {};

export default Projects;
