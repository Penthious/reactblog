import React, {
    Component,
    PropTypes,
} from 'react';

import '../../sass/resume.sass';

class Resume extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-offset-1 is-6">
                        <h1 className="resume--text resume--header">Tomas Leffew</h1>
                        <p className="resume--text">Salt Lake City, Utah</p>
                        <p className="resume--text">Site: penthious.com</p>
                        <p className="resume--text">Phone: 210-290-4890</p>
                        <p className="resume--text">Email: tleffew1994@gmail.com</p>
                        <p className="resume--text"><a href="https://github.com/Penthious">https://github.com/Penthious</a></p>
                    </div>
                    <div className="column is-offset-1 is-3 is-offset-3-mobile">
                        <img className="resume--image" src="/images/tomas.jpg" alt="" />
                    </div>
                </div>
                <hr />
                <div className="columns">
                    <div className="column is-offset-1 is-8">
                        <div className="resume--header">
                            <p>About me</p>
                        </div>
                        <div>
                            <p className="resume--text">
                                I am 21 years old, currently living in Utah. I have taken to web development like wild
                                fire. I started learning how to code in November of 2015. After 2 months of struggling
                                to find good resources that kept my attention I decided to attend a coding bootcamp. It
                                was a 4 month course and when I was done I was able to build a fully functional site.
                                Not long after I landed my first job in Salt Lake City.
                            </p>
                            <br />
                            <p className="resume--text">
                                At this job I focused on mainly the backend but I also took on the task's of front end
                                work. After 6 months working for this company things went down hill. Sadly the company
                                hit a hard time and had to lay me off. It was a hard time but I kept my head up and
                                decided to make the best of it. Now I am freelancing and learning react as I think its a awesome framework.
                            </p>
                            <div className="resume--header">
                                <p>Skills</p>
                            </div>
                            <div>
                                <p className="resume--text">Bash | Blade | Bulma | CSS | Flexbox | Git | HTML | JSON | JavaScript | jQuery | Laravel | MySQL |
                                    PHP | PHP Storm | React | Sass | Sequel Pro app | Twitter Bootstrap | Vim</p>
                            </div>
                            <div className="resume--header">
                                <p>Work experience</p>
                            </div>
                            <div>
                                <p className="resume--text">Full Stack Developer, SLC Devshop - June 2016 - November 2016</p>
                                <p className="resume--bullet">Build and maintained current projects with a main focus on Laravel, jquery and bootstap</p>
                                <p className="resume--bullet">Over see work that was being handled by our over seas developers</p>
                                <br />
                                <p className="resume--text">Satellite Technician, Direct TV 2015 - 2016</p>
                                <p className="resume--bullet">Installed DirectTv unites and tutored customers on basic usage</p>
                                <p className="resume--bullet">Self-managed time and workload on a daily basis</p>
                            </div>
                            <div className="resume--header">
                                <p>Education</p>
                            </div>
                            <div>
                                <p className="resume--text">Codeup - Januray 2016 - May 2016</p>
                                <br />
                                <p className="resume--text">North West Vista College 2012-2014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Resume.propTypes    = {};
Resume.defaultProps = {};

export default Resume;
