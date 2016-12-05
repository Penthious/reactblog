import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import store from '../store/store';
import Layout from './Layout';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import Calculator from '../projects/calculator/Calculator';
import Timer from '../projects/stopwatch/Timer';
import Todo from '../projects/todo/Todo';

const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="projects" component={Projects} />
            <Route path="calculator" component={Calculator} />
            <Route path="stopwatch" component={Timer} />
            <Route path="todo" component={Todo} />
            <Route path="resume" component={Resume} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
