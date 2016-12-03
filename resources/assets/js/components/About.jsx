import React from 'react';

import '../../sass/about.sass';

const About = () => (
    <div>
        <div className="columns">
            <div className="column is-offset-4 is-offset-2-mobile">
                <h1 className="title is-1 about--underline">Tomas Leffew</h1>
            </div>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-6 is-offset-1-mobile is-10-mobile">
                <p>
                    Hello My name is Tomas, if you want to know a little about me please feel free
                    to read on. Now to start I am at the time of writing this (December 2, 2016) 21
                    years old. I started to program last year about this time and I have leaned a
                    lot. From backend architecture to front end responsiveness, I still have so much
                    learning to do but i&#39;m taking it one day at a time.
                </p>
            </div>
            <div className="column is-4 is-offset-1-mobile is-10-mobile ">
                <img className="is-1by1 about--rotate" src="/images/tomas.jpg" alt="" />
            </div>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <img className="about--order2" src="/images/family.jpg" alt="" />
            </div>
            <div className="column is-5 is-offset-1-mobile is-10-mobile">
                <p>
                    I have two children and am married, my oldest is 3 years old and my youngest is
                    2. My kids and wife are what drives me to keep on improving. I want to be able
                    to show my children that yes anyone can move up in the world if you put enough
                    time and effort into it.
                </p>
            </div>
        </div>
        <div className="columns">
            <div className="column is-offset-1 is-6 is-offset-1-mobile is-10-mobile">
                <p>
                    This is my workstation, this is where I spend the majority of my day at! I built
                    my own split
                    keyboard for ergonomic reasons and plus I really enjoy tinkering with
                    technology. I built my own
                    computer so I could add the exact parts I wanted to it. The chair was first just
                    to match my color
                    scheme but I&#39;v grown to like it haha. Lastly my desk is a stand up desk, it
                    has
                    helped greatly in
                    back pain from sitting all day.
                </p>
            </div>
            <div className="column is-4 is-offset-1-mobile is-10-mobile">
                <img className="is-1by1" src="/images/desk.jpg" alt="" />
            </div>
        </div>
        <div className="columns ">
            <div className="column is-offset-1 is-4 is-offset-1-mobile is-10-mobile">
                <img className="about--rotate about--order2" src="/images/piano.jpg" alt="" />
            </div>
            <div className="column is-offset-1 is-5 is-offset-1-mobile is-10-mobile">
                <p className="about--order1">
                    A few things I love to do on my spare time is firstly to skateboard. I use to
                    spends hours skating
                    all day long before and after school. Lately I don&#39;t skate much as im
                    constantly studying and writing new things. I also love to play video games, I
                    am a RPG type of person but I will play some call of duty or battlefield from
                    time to time. I usually am online first thing in the morning for about a hour as
                    it helps me wake up and get ready for the day. Also I have started learning
                    piano as its such a beautiful instrument, also is great for your mind!
                </p>
            </div>
        </div>
    </div>
);

export default About;
