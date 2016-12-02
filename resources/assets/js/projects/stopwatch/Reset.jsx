import React, { Component, PropTypes } from 'react';

class Reset extends Component {
    handleOnClick = () => {
        this.props.resetTime();
    };

    render() {
        return (
            <div className="Reset">
                <button onClick={this.handleOnClick}>Reset</button>
            </div>
        );
    }
}

Reset.propTypes = {
    resetTime: PropTypes.func.isRequired,
};

export default Reset;
