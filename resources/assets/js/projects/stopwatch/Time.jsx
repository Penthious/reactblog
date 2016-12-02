import React, { PropTypes } from 'react';

const Time = props => (
    <div className="Time">
        <span>{props.minutes}</span>
        <span>:</span>
        <span>{props.seconds}</span>
        <span>:</span>
        <span>{props.milliseconds}</span>
    </div>
);

Time.propTypes = {
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    milliseconds: PropTypes.string,
};

export default Time;
