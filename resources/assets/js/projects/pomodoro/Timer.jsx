import React, {
    Component,
    PropTypes,
} from 'react';


class Timer extends Component {
    render() {
        return (
            <div className="timer--border">
                <div className="columns is-multiline is-mobile">
                    <div className="column"><span>{this.props.minutes}</span></div>
                    <div className="column"><span>:</span></div>
                    <div className="column"><span>{this.props.seconds}</span></div>
                </div>
            </div>
        );
    }
}

Timer.propTypes    = {};
Timer.defaultProps = {};

export default Timer;
