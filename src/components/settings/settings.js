import React, { Component } from "react";

import './settings.scss'

export default class Settings extends Component {
    render() {
        return (
            <div className="timer__settings">
                    <div className="timer__settings-item">
                        Work time:
                        <input type={"number"} className="timer__settings-input" id="work" onChange={this.props.onChange} placeholder={this.props.workTime}></input>
                    </div>
                    <div className="timer__settings-item">
                        Short break
                        <input type={"number"} className="timer__settings-input" id="short" onChange={this.props.onChange} placeholder={this.props.shortBreak}></input>
                    </div>
                    <div className="timer__settings-item">
                        Long break: 
                        <input type={"number"} className="timer__settings-input" id="long" onChange={this.props.onChange} placeholder={this.props.longBreak}></input>
                    </div>
                    <div className="timer__settings-item">
                        Circles in set:
                        <input type={"number"} className="timer__settings-input" id="circles" onChange={this.props.onChange} placeholder={this.props.circles}></input>
                    </div>
                    <div className="timer__settings-item">
                        Number of sets:
                        <input type={"number"} className="timer__settings-input" id="sets" onChange={this.props.onChange} placeholder={this.props.sets}></input>
                    </div>
                </div>
        )
    }
}