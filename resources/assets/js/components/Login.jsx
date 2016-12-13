import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';


@connect((store) => {
    return {
        authenticated: store.auth.authenticated,
    };
})
class Login extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    componentWillMount() {
        if (this.props.authenticated) {
            browserHistory.push('/');
        }
    }

    handleFormSubmit = (values) => {
        this.props.dispatch(loginUser({ email: values.email, password: values.password }));
        console.log(values);
    };

    render() {
        const { handleSubmit, invalid, submitting} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>
                    <div>
                        <label htmlFor="pasword">Password</label>
                        <Field name="password" component="input" type="password" />
                    </div>
                    <button type="submit" disabled={invalid || submitting}>Submit</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};

Login = reduxForm({
    form: 'login', // a unique name for this form
})(Login);

export default Login;
