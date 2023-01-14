import React, { Component } from "react";

import "./timer.scss";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workTime: this.props.workTime,
            longBreak: this.props.longBreak,
            shortBreak: this.props.shortBreak,
            circles: this.props.circles,
            sets: this.props.sets
        }
    }

    render() {
        return (
            <div className="timer">
                <svg className="svg" viewBox="0 0 352 352">
                    <circle className="timer__body timer__body--active" cx={176} cy={176} r={170}></circle>
                </svg>
                <div className="timer__clock">
                    10:00
                    <button className="timer__button">start</button>
                </div>
                <div className="timer__settings">
                    <div className="timer__settings-item">
                        Work time:
                        <input type={"number"} className="timer__settings-input" id="work"></input>
                    </div>
                    <div className="timer__settings-item">
                        Long break: 
                        <input type={"number"} className="timer__settings-input" id="long"></input>
                    </div>
                    <div className="timer__settings-item">
                        Short break
                        <input type={"number"} className="timer__settings-input" id="short"></input>
                    </div>
                    <div className="timer__settings-item">
                        Circles in set:
                        <input type={"number"} className="timer__settings-input" id="circles"></input>
                    </div>
                    <div className="timer__settings-item">
                        Number of sets:
                        <input type={"number"} className="timer__settings-input" id="sets"></input>
                    </div>
                </div>
            </div>
        )
    }
}