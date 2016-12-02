import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import '../../sass/contact.sass';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            danger: false,
            disabled: false,
            name: '',
            email: '',
            reason: '',
            message: '',
        }
    }

    handleName    = (e) => {
        this.setState({name: e.target.value});
    };
    handleEmail   = (e) => {
        this.setState({email: e.target.value});
    };
    handleReason  = (e) => {
        this.setState({reason: e.target.value});
    };
    handleMessage = (e) => {
        this.setState({message: e.target.value});
    };

    handleOnClick = () => {
        this.setState({
            disabled: true,
            success: false,
            error: false,
        });
        axios.post('/sendMail', {
            name: this.state.name,
            email: this.state.email,
            reason: this.state.reason,
            message: this.state.message,
        })
            .then((response) => {
                this.setState({
                    success: true,
                    disabled: false,
                    name: '',
                    email: '',
                    reason: '',
                    message: '',
                });
            })
            .catch((error) => {
                this.setState({
                    disabled: false,
                    error: true,
                });
            });
    };

    render() {
        const disabled = this.state.disabled ? 'disabled' : '';
        return (
            <div>
                {this.state.success === true
                    ?
                    <article className="message is-primary contact--message">
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
                        <input type="text" className="input" name="name" placeholder="Name:" value={this.state.name}
                               onChange={this.handleName} />
                        <input type="text" className="input" name="email" placeholder="Email:" value={this.state.email}
                               onChange={this.handleEmail} />
                        <select name="reason" className="select" value={this.state.reason} onChange={this.handleReason}>
                            <option value='' disabled selected="selected">Select Reason:</option>
                            <option value="feedback">Feedback</option>
                            <option value="say_hello">Say Hello</option>
                            <option value="hire">Hire</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea className="textarea" name="message" placeholder="Message me anything"
                                  value={this.state.message} onChange={this.handleMessage }></textarea>
                        <button className="button is-primary contact--button" disabled={disabled}
                                onClick={this.handleOnClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes    = {};
Contact.defaultProps = {};

export default Contact;
