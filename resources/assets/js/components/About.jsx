import React from 'react';

import Carousel from './Carousel';
import '../../sass/about.sass';

const About = () => (
    <div>
        <div className="columns">
            <div className="column is-offset-4 is-offset-2-mobile">
                <h1 className="title is-1 about--underline">Tomas Leffew</h1>
            </div>
        </div>
        <div className="columns about--background">
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    Hello My name is Tomas, if you want to know a little about me please feel free
                    to read on. I started to program last year about this time and I have learned a
                    lot, from backend architecture to frontend responsiveness.
                </p>
            </div>
            <div className="column is-4 is-offset-1 is-offset-1-mobile is-10-mobile ">
                <Carousel img={['/tomas2.jpg', '/cjtomas.jpg', '/res7tomas.jpg']} />
            </div>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-4 is-offset-1-mobile is-10-mobile">
                <Carousel img={['/family.jpg', '/familywaterfall.jpg', '/familymountain.jpg']} />
            </div>
            <div className="column is-5 is-offset-1 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    I have two children and am married, my oldest is 3 years old and my youngest is
                    2. I want to be able to show my children that anyone can move up in the world
                    if you put enough time and effort into it.
                </p>
            </div>
        </div>
        <div className="columns about--background">
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    This is my workstation. I built my own split keyboard for ergonomic reasons and
                    built my own computer. Lastly my desk is a stand up desk, it has helped greatly
                    in back pain from sitting all day.
                </p>
            </div>
            <div className="column is-4 is-offset-1 is-offset-1-mobile is-10-mobile">
                <Carousel img={['/desk.jpg', '/chair.jpg', '/keyboard.jpg']} />
            </div>
        </div>
        <div className="columns">
            <div className="about--p column is-offset-1 is-4 is-offset-1-mobile is-10-mobile">
                <Carousel img={['/piano.jpg', '/game.jpg']} />
            </div>
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    I love to play video games in my spare time. I have also started learning
                    piano as it&#39;s such a beautiful instrument, and it is great for your mind!
                </p>
            </div>
        </div>
    </div>
);

export default About;
