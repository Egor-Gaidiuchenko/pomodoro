import React, { Component } from "react";
import AppHeader from "../header/header";
import Timer from "../timer/timer";
import Indicator from "../indicator/indicator";
import Settings from "../settings/settings";

import "./app.scss"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workTime: 1,
            shortBreak: 1,
            longBreak: 2,
            circles: 2,
            sets: 1
        }
    }

    onChangeActiveInterval = (interval) => {
        this.setState(() => ({
            active: interval
        }))
    }

    render() {
        const {workTime, shortBreak, longBreak, circles, sets, active} = this.state

        return (
            <div className="app">
                <AppHeader/>
                <Indicator 
                    active={active}
                />
                <Timer
                    workTime={workTime}
                    shortBreak={shortBreak}
                    longBreak={longBreak}
                    circles={circles}
                    sets={sets}
                    onChangeActiveInterval={this.onChangeActiveInterval}
                />
                <Settings/>
            </div>
        )
    }
}