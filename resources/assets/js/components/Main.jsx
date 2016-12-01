import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Layout from './Layout';
import Test from './Test';
import Projects from './Projects';
import Calculator from '../projects/calculator/Calculator';

const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Test} string="this is a test string" />
            <Route path="projects" component={Projects} />
            <Route path="calculator" component={Calculator} />
        </Route>
    </Router>
);

ReactDom.render(<App />, document.getElementById('app'));
