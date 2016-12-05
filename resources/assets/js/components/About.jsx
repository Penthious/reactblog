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
            <div className="column is-offset-1 is-6 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    Hello My name is Tomas, if you want to know a little about me please feel free
                    to read on. Now to start I am at the time of writing this (December 2, 2016) 21
                    years old. I started to program last year about this time and I have learned a
                    lot. From backend architecture to frontend responsiveness, I still have so much
                    learning to do but I&#39;m taking it one day at a time.
                </p>
            </div>
            <div className="column is-4 is-offset-1-mobile is-10-mobile ">
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
                    2. They are the driving force that keeps me improving. I want to be able
                    to show my children that anyone can move up in the world if you put enough
                    time and effort into it.
                </p>
            </div>
        </div>
        <div className="columns about--background">
            <div className="column is-offset-1 is-6 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    This is my workstation. This is where I spend the majority of my day! I built
                    my own split keyboard for ergonomic reasons and plus I really enjoy tinkering
                    with technology. I built my own computer so I could add the exact parts I wanted
                    to it. The chair was first just to match my color scheme but I&#39;ve grown to
                    like it haha. Lastly my desk is a stand up desk, it has helped greatly in back
                    pain from sitting all day.
                </p>
            </div>
            <div className="column is-4 is-offset-1-mobile is-10-mobile">
                <Carousel img={['/desk.jpg', '/chair.jpg', '/keyboard.jpg']} />
            </div>
        </div>
        <div className="columns">
            <div className="about--p column is-offset-1 is-4 is-offset-1-mobile is-10-mobile">
                <Carousel img={['/piano.jpg', '/game.jpg']} />
            </div>
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <p className="about--p">
                    A few things I love to do on my spare time is firstly to skateboard. I use to
                    spends hours skating before and after school. Lately I don&#39;t skate much as
                    I&#39;m constantly studying and coding new things. I also love to play video
                    games. I
                    am a RPG type of person but I will play some Call of Duty or Battlefield from
                    time to time. I usually am online first thing in the morning for about a hour as
                    it helps me wake up and get ready for the day. Also I have started learning
                    piano as it&#39;s such a beautiful instrument, and it is great for your mind!
                </p>
            </div>
        </div>
    </div>
);

export default About;
