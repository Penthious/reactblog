import React from 'react';
import { Link } from 'react-router';

import '../../sass/about.sass';

const About = (props) => (
    <div>
        <div className="columns is-multiline is-mobile">
            <column className="column is-2 is-1-desktop is-2-tablet is-2-mobile boxtest">1oeueou</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">2ueueu</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">3eueu</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">4eueue</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">5eueu</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">6eueu</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">7eueu</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">8</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">9</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">10</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">11</column>
            <column className="column is-1-desktop is-1-tablet is-1-mobile boxtest">12</column>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at beatae corporis dignissimos distinctio
                dolor ea facilis fugit illum labore molestiae mollitia, nam nihil odio, porro quaerat reprehenderit
                similique sunt.
            </div>
            <div className="column is-offset-1 is-5">
                <img className="is-1by1 about--rotate" src="/images/tomas.jpg" alt="" />
            </div>
        </div>
        <div className="columns is-mobile">
            <div className="column is-offset-1 is-4 about--order2">
                <img className="about--rotate about--order2" src="/images/tomas.jpg" alt="" />
            </div>
            <div className="column is-offset-1 is-6 about--order1">
                <p className="about--order1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur deserunt fugit incidunt
                    inventore maiores praesentium quisquam voluptates! Adipisci cupiditate dignissimos eius et ex hic id
                    impedit laborum laudantium, molestias.</p>
            </div>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at beatae corporis dignissimos distinctio
                dolor ea facilis fugit illum labore molestiae mollitia, nam nihil odio, porro quaerat reprehenderit
                similique sunt.
            </div>
            <div className="column is-offset-1 is-5">
                <img className="is-1by1 about--rotate" src="/images/tomas.jpg" alt="" />
            </div>
        </div>
    </div>
);

export default About;
