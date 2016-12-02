import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';

import  Project from './Project';
import projectsData from '../projectsData.js';

class Projects extends Component {

    allProjects = () => projectsData;


    render() {
        console.log(this.allProjects().map(project => <button>test</button>));
        return (
            <div className="container">

                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 0 || index === 1 || index === 2) {

                            return <Project {...project} />;
                        }
                    })}
                </div>
                <hr />
                <div className="columns">
                    <div className="column is-offset-2">
                        <p>All code under here is on a private github but feel free to message me and I can team view with you to show you the code</p>
                    </div>
                </div>
                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 0 || index === 1 || index === 2) {

                            return <Project {...project} />;
                        }
                    })}
                </div>
                <div className="columns project--card">
                    {this.allProjects().map(function (project, index) {
                        if (index === 0 || index === 1 || index === 2) {

                            return <Project {...project} />;
                        }
                    })}
                </div>
            </div>
        );
    }
}


Projects.propTypes = {};

export default Projects;
