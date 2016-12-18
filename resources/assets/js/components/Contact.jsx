import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import '../../sass/contact.sass';

@connect((store) => {
    return {};
})
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            danger: false,
        };
    }

    handleFormSubmit = (values) => {
        this.setState({
            success: false,
            error: false,
        });
        axios.post('/sendMail', {
            name: values.name,
            email: values.email,
            reason: values.reason,
            message: values.message,
        })
            .then(() => {
                this.props.dispatch({ type: 'ACCOUNT_SAVE_SUCCESS' });
                this.setState({
                    success: true,
                });
            })
            .catch(() => {
                this.setState({
                    error: true,
                });
            });
    };

    render() {
        const { handleSubmit, invalid, submitting } = this.props;
        return (
            <div>
                {this.state.success === true
                    ? <article className="message is-primary contact--message">
                    <div className="message-header">
                        <p className="is-centered">Your email has been sent :)</p>
                    </div>
                </article>
                    : ''
                }
                {this.state.error === true ?
                    <article className="message is-danger contact--message">
                        <div className="message-header">
                            <p className="is-centered">Your email was not able to send :(</p>
                        </div>
                    </article>
                    : ''
                }
                <div className="columns">
                    <div className="column">
                        <p className="contact--title">Get in Touch!</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-6 is-offset-1-mobile is-9-mobile">
                        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                            <Field
                                type="text"
                                className="input"
                                name="name"
                                placeholder="Name:"
                                component="input"
                                required
                            />
                            <Field
                                type="text"
                                className="input"
                                name="email"
                                placeholder="Email:"
                                component="input"
                                required
                            />
                            <Field
                                name="reason"
                                className="select"
                                component="select"
                            >
                                <option value="" disabled>Select Reason:</option>
                                <option value="feedback">Feedback</option>
                                <option value="say_hello">Say Hello</option>
                                <option value="hire">Hire</option>
                                <option value="code">View Code</option>
                                <option value="other">Other</option>
                            </Field>
                            <Field
                                className="textarea"
                                name="message"
                                placeholder="Message me anything"
                                component="textarea"
                            />
                            <button
                                className="button is-primary contact--button"
                                disabled={invalid || submitting}
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes    = {};
Contact.defaultProps = {};

Contact = reduxForm({
    form: 'contact',
})(Contact);

export default Contact;
