import React from 'react';
import { Link } from 'react-router';

const Landing = () => (
    <div className="home-info">
        <h1 className="title">svideo</h1>
        <input className="search" type="text" placeholder="Search" />
        <Link to="/search" className="browse-all"> or Browse All</Link>
    </div>
);

export default Landing;
