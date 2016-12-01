import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Layout from './Layout';
import Test from './Test';
import Calculator from '../js/projects/calculator/Calculator'
const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Test} />
            <Route path="projects">
                <Route path="/calculator" component={Calculator} />
            </Route>
        </Route>
    </Router>
);

ReactDom.render(<App />, document.getElementById('app'));
