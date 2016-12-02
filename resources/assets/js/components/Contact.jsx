import React, {
    Component,
    PropTypes,
} from 'react';

import '../../sass/contact.sass';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <p className="contact--title">Get in Touch!</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-6 is-offset-1-mobile is-9-mobile">
                        <input type="text" className="input" placeholder="Name:"/>
                        <input type="text" className="input" placeholder="Email:"/>
                        <select name="" className="select">
                            <option value="" disabled selected="selected">Select Reason:</option>
                            <option value="">Feedback</option>
                            <option value="">Say Hello</option>
                            <option value="">Hire</option>
                            <option value="">Other</option>
                        </select>
                        <textarea className="textarea" placeholder="Message me anything"></textarea>
                        <button className="button is-primary contact--button">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes    = {};
Contact.defaultProps = {};

export default Contact;
