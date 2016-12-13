import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {logoutUser} from '../../actions/authActions';

@connect((store) => {
    return {};
})
class Logout extends Component {
    componentWillMount() {
        this.props.dispatch(logoutUser());
        browserHistory.push('/');
    }

    render() {
        return (
            <div></div>
        );
    }
}

Logout.propTypes    = {};
Logout.defaultProps = {};

export default Logout;
