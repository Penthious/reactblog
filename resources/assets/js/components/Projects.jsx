import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import  Project from './Project';
import Personal from './Personal';
import projectsData from '../projectsData.js';

class Projects extends Component {
    componentWillUnmount() {
        console.log('UNMOUNTED');
    }

    allProjects = () => projectsData;


    render() {
        return (
            <div className="container">

                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 0 || index === 1) {

                            return <Project {...project} />;
                        }
                    })}
                </div>
                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 2 || index === 3) {

                            return <Project {...project} />;
                        }
                    })}
                </div>
                <hr />
                <div className="columns">
                    <div className="column is-offset-2 is-8 is-offset-1-mobile is-10-mobile">
                        <p className="contact--title">All code under here is on a private github but feel free to message me and I can team view
                            with you to show you the code</p>
                    </div>
                </div>
                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 4 || index === 5) {
                            return <Personal {...project} />;
                        }
                    })}
                </div>
                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 6 || index === 7) {
                            return <Personal {...project} />;
                        }
                    })}
                </div>
            </div>
        );
    }
}


Projects.propTypes = {};

export default Projects;
