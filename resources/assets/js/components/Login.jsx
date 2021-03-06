import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';


@connect(store =>
    ({
        authenticated: store.auth.authenticated,
        token: store.auth.token,
    }))
class Login extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
            browserHistory.push('/');
        }
    }

    handleFormSubmit = (values) => {
        this.props.dispatch(loginUser({ email: values.email, password: values.password }));
        browserHistory.push('/');
    };

    render() {
        const { handleSubmit, invalid, submitting } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
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

Login.propTypes = {
    authenticated: PropTypes.bool,
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
};
Login.defaultProps = {};

Login = reduxForm({
    form: 'login', // a unique name for this form
})(Login);

export default Login;
