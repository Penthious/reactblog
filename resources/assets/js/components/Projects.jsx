import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';

class Projects extends Component {
    allProjects = () =>
        [
            {
                name: 'Calculator',
                created_at: 'Wednesday, November 30',
                description: 'A simple calculator built out of react',
                github: 'https://github.com/Penthious/reactCalculator',
                image: '',
                link: 'calculator',
            },
            {
                name: 'Simple Simon',
                created_at: 'Wednesday, November 30',
                description: 'The game we all know and love Simple simon.',
                github: 'https://github.com/Penthious/react-simpleSimon',
                image: '',
                link: 'simpleSimon',
            },
        ];


    render() {
        let html;
        for (let i = 0; i < this.allProjects().length; i++) {
            const project = this.allProjects()[i];
            console.log(project);
            if ((i + 1) % 3 === 1) {
                html += (<div className="columns">);
            }
            html += (<div className="column">
                       <div className="card">
                           <div className="card-image">
                               <figure className="image is-4by3">
                                   <img src="http://placehold.it/300x225" alt="" />
                               </figure>
                           </div>
                           <div className="card-content">
                               <div className="media">
                                   <div className="media-left">
                                       <figure className="image is-32x32">
                                           <Link to={project.link}>
                                               <img src="http://placehold.it/64x64" alt="Image" />
                                           </Link>
                                       </figure>
                                   </div>
                                   <div className="media-content">
                                       <p className="subtitle is-6"><a href={project.github}
                                                                       rel="noopener noreferrer"
                                                                       target="_blank">
                                           Code for {project.name}</a></p>
                                   </div>
                               </div>

                               <div className="content">
                                   <p>{project.description}</p>
                                   <br />
                                   <small>{project.created_at}</small>
                               </div>
                           </div>
                       </div>);
            if ((i + 1) % 3 === 0) {
                html += (</div>);
            }
        }
        return (
            <div>
                { html }
            </div>

        );
    }
}


Projects.propTypes = {};

export default Projects;
