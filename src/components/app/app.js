import React, { Component } from "react";
import AppHeader from "../header/header";
import Timer from "../timer/timer";
import Indicator from "../indicator/indicator";
import Settings from "../settings/settings";

import "./app.scss"

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <Indicator 
                    active={0}
                />
                <Timer
                    workTime={10}
                    shortBreak={1}
                    longBreak={5}
                    circles={3}
                    sets={2}
                />
                <Settings/>
            </div>
        )
    }
}