import React, { Component } from "react";
import AppHeader from "../header/header";
import Timer from "../timer/timer";
import Indicator from "../indicator/indicator";
import ToggleSettings from "../toggleSettings/toggleSettings";

import "./app.scss"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workTime: 20,
            shortBreak: 5,
            longBreak: 10,
            circles: 5,
            sets: 3,
            settingsShowing: false
        }
    }

    onChangeActiveInterval = (interval) => {
        this.setState(() => ({
            active: interval
        }))
    }

    onChange = (e) => {
        if (e.target.id === "work") {
            this.setState(() => ({
                workTime: +e.target.value
            }))
        } else if (e.target.id === "long") {
            this.setState(() => ({
                longBreak: +e.target.value
            }))
        } else if (e.target.id === "short") {
            this.setState(() => ({
                shortBreak: +e.target.value
            }))
        } else if (e.target.id === "circles") {
            this.setState(() => ({
                circles: +e.target.value
            }))
        } else if (e.target.id === "sets") {
            this.setState(() => ({
                sets: +e.target.value
            }))
        } 
    } 

    toggleMenu = () => {
        this.setState(state => ({
            settingsShowing: !state.settingsShowing
        }))
    }

    render() {
        const {workTime, shortBreak, longBreak, circles, sets, active, settingsShowing} = this.state

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
                    settingsShowing={settingsShowing}
                    onChangeActiveInterval={this.onChangeActiveInterval}
                    onChange={this.onChange}
                />
                <ToggleSettings
                    toggleMenu={this.toggleMenu}
                />
            </div>
        )
    }
}