import React, { Component } from 'react';

import Time from './Time';
import StartStop from './StartStop';
import Reset from './Reset';
import './timer.sass';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            minutes: '00',
            seconds: '00',
            milliseconds: '00',
            timeDivider: 1 / 60,
            timerInterval: '',
        };
    }

    resetTime = () => {
        this.setState({
            minutes: '00',
            seconds: '00',
            milliseconds: '00',
            timeDivider: 1 / 60,
            start: false,
        });
        clearInterval(this.state.timerInterval);
    };

    startStop = () => {
        this.setState({
            start: !this.state.start,
        });

        if (!this.state.start) {
            this.setState({
                timerInterval: setInterval(() => {
                    this.setState({ timeDivider: (1 / 60) + this.state.timeDivider });
                    const timer = this.state.timeDivider;
                    const milliseconds = Math.floor((timer - Math.floor(timer)) * 100);
                    const seconds = Math.floor(timer) - (Math.floor(timer / 60) * 60);
                    const minutes = Math.floor(timer / 60);
                    this.setState({
                        minutes: minutes >= 10 ? `${minutes}` : `0${minutes}`,
                        seconds: seconds >= 10 ? `${seconds}` : `0${seconds}`,
                        milliseconds: milliseconds >= 10 ? `${milliseconds}` : `0${milliseconds}`,
                    });
                }, 1000 / 60),
            });
        } else {
            clearInterval(this.state.timerInterval);
        }
    };


    render() {
        return (
            <div className="columns">
                <div className="column is-offset-4 is-offset-1-mobile is-10-mobile timer--margin">

                    <div className="Timer">

                        <Time {...this.state} />
                        <div className="button-box">
                            <StartStop
                                startStop={this.startStop}
                                start={this.state.start}
                            />
                            <Reset resetTime={this.resetTime} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;
