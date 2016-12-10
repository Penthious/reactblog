import React, {
    Component,
    PropTypes,
} from 'react';

import Tracker from './Tracker';
import Timer from './Timer';
import Control from './Control';
import './clock.sass';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true,
            active: 'Work',
            name: 'Work',
            work: 'Work',
            workTime: '25',
            break: 'Break',
            breakTime: '5',
            minutes: '25',
            seconds: '00',
            start: 'Start',
            breakInterval: '',
            workInterval: '',
        }
    }

    /**
     * Updates the state of workTime either + || -
     * @param value
     */
    updateWorkTime = (value = null) => {
        let workTime = +this.state.workTime;
        console.log(value);
        if (value) {
            workTime++;
            this.setState({workTime});
        } else {
            workTime--;
            this.setState({workTime});
        }
    };

    /**
     * Updates the state of breakTime either + || -
     * @param value
     */
    updateBreakTime = (value = null) => {
        let breakTime = +this.state.breakTime;
        if (value) {
            breakTime++;
            this.setState({breakTime});
        } else {
            breakTime--;
            this.setState({breakTime});
        }
    };

    /**
     * Changes state.active to either Work or Break
     * @param active
     */
    updateActive = (active) => {
        if (active === 'Work') {
            this.setState({active, minutes: this.state.workTime});
        }
        if (active === 'Break') {
            this.setState({active, minutes: this.state.breakTime})
        }
    };

    /**
     * Starts the count down timer.
     */
    handleStart = () => {
        this.setState({start: 'Pause'});
        if (this.state.active === 'Work' && this.state.on) {
            this.setState({
                minutes: this.state.workTime,
                workInterval: setInterval(() => {
                    let minutes = +this.state.minutes;
                    let seconds = +this.state.seconds;
                    seconds--;
                    if (minutes === 0 && seconds === 0) {
                        this.setState({
                            workInterval: clearInterval(this.state.workInterval),
                            active: 'Break',
                            minutes: this.state.breakTime,
                        });
                        this.handleStart();
                    }
                    else if (seconds <= 0) {
                        console.log('test');
                        minutes--;
                        seconds = 60;
                        this.setState({minutes, seconds});
                    } else {
                        this.setState({minutes, seconds});
                    }
                }, 1000),
            });
        } else if (this.state.on) {
            this.setState({
                minutes: this.state.breakTime,
                breakInterval: setInterval(() => {
                    let minutes = +this.state.minutes;
                    let seconds = +this.state.seconds;
                    seconds--;
                    if (minutes === 0 && seconds === 0) {
                        this.setState({
                            breakInterval: clearInterval(this.state.breakInterval),
                            active: 'Work',
                            minutes: this.state.workTime,
                        });
                        this.handleStart();
                    }
                    else if (seconds <= 0) {
                        minutes--;
                        seconds = 60;
                        this.setState({minutes, seconds});
                    } else {
                        this.setState({minutes, seconds});
                    }
                }, 1000),
            });
        }
    };

    /**
     * Clears the timer back to its default.
     */
    handleReset = () => {
        if (this.state.active === 'Work') {
            this.setState({
                workInterval: clearInterval(this.state.workInterval),
                minutes: this.state.workTime,
                seconds: '00',
                start: 'Start',
            });
        } else {
            this.setState({
                breakInterval: clearInterval(this.state.breakInterval),
                minutes: this.state.breakTime,
                seconds: '00',
                start: 'Start',
            });
        }
    };

    /**
     * Pauses the current session
     */
    handlePause = () => {
        if (this.state.active === 'Work') {
            this.setState({
                workInterval: clearInterval(this.state.workInterval),
                start: 'Start',
            });
        } else {
            this.setState({
                breakInterval: clearInterval(this.state.breakInterval),
                start: 'Start',
            });
        }
    };

    render() {
        return (
            <div>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-offset-1">
                        <Tracker
                            number={this.state.breakTime}
                            name={this.state.break}
                            handleActive={this.updateActive}
                            handleBreakTime={this.updateBreakTime}
                        />
                    </div>
                    <div className="column">
                        <Tracker
                            number={this.state.workTime}
                            name={this.state.work}
                            handleActive={this.updateActive}
                            handleWorkTime={this.updateWorkTime}
                        />
                    </div>
                </div>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-offset-4"><span>{this.state.active}</span></div>
                </div>
                <div className="columns">
                    <div className="column is-offset-2 is-8">
                        <Timer { ...this.state } />
                    </div>
                </div>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-offset-2 is-2">
                        <Control
                            name={this.state.start}
                            handlePause={this.handlePause}
                            handleStart={this.handleStart}
                        />
                    </div>
                    <div className="column is-offset-5 is-2">
                        <Control name="Reset" handleReset={this.handleReset} />
                    </div>
                </div>
            </div>
        );
    }
}

Clock.propTypes    = {};
Clock.defaultProps = {};

export default Clock;
