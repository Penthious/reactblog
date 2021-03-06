import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Project from './Project';
import PrivateRepo from './PrivateRepo';
import projectsData from '../projectsData';
import privateRepoData from '../privateRepoData';
import '../../sass/projects.sass';

class Projects extends Component {
    allProjects = () => projectsData;
    privateRepos = () => privateRepoData;

    render() {
        if (this.props.children) {
            return this.props.children;
        }
        return (
            <div className="container">


                <div className="columns">
                    <div className="column is-offset-2 is-8 is-offset-1-mobile is-10-mobile">
                        <p className="project--title">
                            Full blown apps, contact me if you want to see the code.
                        </p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-4 is-3 is-offset-3-mobile is-4-mobile">
                        <Link to="contact" className="is-primary button">Contact</Link>
                    </div>
                </div>

                {this.privateRepos().map(project =>
                    <PrivateRepo key={project.name} {...project} />)}


                <hr />
                <div className="columns">
                    <div className="column is-offset-2 is-8 is-offset-1-mobile is-10-mobile">
                        <p className="project--title project--underline">
                            All my current react projects
                        </p>
                    </div>
                </div>

                <div className="columns project--card">
                    {this.allProjects().map((project, index) => {
                        if (index === 0 || index === 1) {
                            return <Project key={`${project.name}${index}`} {...project} />;
                        }
                        return null;
                    })}
                </div>
                <div className="columns project--card">
                    {this.allProjects().map((project, index) => {
                        if (index === 2 || index === 3) {
                            return <Project key={`${project.name}${index}`} {...project} />;
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    }
}

Projects.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
};
export default Projects;
