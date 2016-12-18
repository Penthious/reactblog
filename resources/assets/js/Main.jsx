import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, browserHistory, IndexRoute } from 'react-router';

import store from './store/store';
import Layout from './components/Layout';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Calculator from './projects/calculator/Calculator';
import Timer from './projects/stopwatch/Timer';
import Todo from './projects/todo/Todo';
import Clock from './projects/pomodoro/Clock';
import Login from './components/Login';
import Logout from './components/auth/Logout';
import Blog from './components/blog/Blog';
import ShowPost from './components/blog/ShowPost';
import EditPost from './components/blog/EditPost';
import { userInfo } from './actions/authActions';

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(userInfo(token));
    store.dispatch({ type: 'AUTHENTICATE' });
}

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="projects" component={Projects}>
                <Route path="calculator" component={Calculator} />
                <Route path="stopwatch" component={Timer} />
                <Route path="todo" component={Todo} />
                <Route path="clock" component={Clock} />
            </Route>
            <Route path="resume" component={Resume} />
            <Route path="contact" component={Contact} />
            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
            <Route path="blog" component={Blog}>
                <Route path="show/:id" component={ShowPost} />
            </Route>
            <Route path="/api/edit/:id" component={EditPost} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
