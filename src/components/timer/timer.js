import React, { Component } from "react";
import Settings from "../settings/settings";

import "./timer.scss";

export default class Timer extends Component {
    state = {
        minutesLeft: 0,
        secondsLeft: '0' + 0,
        longBreak: this.props.longBreak,
        shortBreak: this.props.shortBreak,
        circles: this.props.circles,
        sets: this.props.sets,
        active: true, 
        button: 'start',
        workSet: this.workSetCreator(this.props.circles, this.props.sets), 
        workSetItem: 0,
        stageDurationMinutes: this.props.workTime
    }

    timer = () => {
        
        this.setState(state => ({
            active: !state.active
        }))

        this.buttonChange()

        this.setInterval(this.state.active)
    }

    workSetCreator (circles, sets) {
        let result = []
    
        for (let i = 0; i < sets; i++) {
            for (let j = 1; j <= circles; j++) {
                result.push('pomodoro')
                if (j === circles) {
                    result.push('long break')
                } else {
                    result.push('short break')
                }
            }
        }
    
        return result
    }

    buttonChange() {
        this.setState(() => ({
            button: this.state.button === 'start' ? 'pause' : 'start'
        }))
    }

    setInterval(isActive) {
        if (isActive) {
            let interval = setInterval(() => {
                if (this.state.active) {
                    clearInterval(interval)
                } else {
                    this.setTimer(interval)
                }
            }, 1000)
        }
    }

    setTimer(interval) {
        if (this.setClock()) {
            clearInterval(interval)

            this.setState(() => ({
                minutesLeft: 0,
                secondsLeft: '0' + 0,
                active: true, 
                button: 'start',
                workSetItem: 1
            }))

            this.props.onChangeActiveInterval()

            document.querySelector('.timer__body').style.strokeDashoffset = 2 * 3.1415 * 170
        }
    }

    setClock() {
        if (this.state.minutesLeft === 0 && +this.state.secondsLeft === 0 && this.state.workSetItem === this.state.workSet.length) {
            return true
        }

        if (this.state.minutesLeft === 0 && +this.state.secondsLeft === 0 && this.state.workSetItem < this.state.workSet.length) {
            this.setWorkStage()
        }

        if (+this.state.secondsLeft === 0) {
            this.setState(state => ({
                secondsLeft: '59',
                minutesLeft: --state.minutesLeft
            }))
        } else if (+this.state.secondsLeft <= 10) {
            this.setState(state => ({
                secondsLeft: '0' + --state.secondsLeft
            }))
        } else {
            this.setState(state => ({
                secondsLeft: `${--state.secondsLeft}`
            }))
        }

        this.setStatusBar(this.state.stageDurationMinutes, this.state.minutesLeft, this.state.secondsLeft)
    }

    setStatusBar(duration, minutes, seconds) {
        if (minutes === 0 && +seconds === 0) {
            minutes = duration
        }

        const statusBar = document.querySelector('.timer__body')
        const secondsDuration = duration * 60
        const secondsLeft = minutes * 60 + +seconds
        const fractionLeft = secondsLeft / secondsDuration
        
        statusBar.style.strokeDashoffset = `${2 * 3.1415 * 170 * (fractionLeft)}`
    }

    setWorkStage() {
        this.props.onChangeActiveInterval(this.state.workSet[this.state.workSetItem])

        this.setState(state => ({
            workSetItem: ++state.workSetItem
        }))

        if (this.state.workSet[this.state.workSetItem] === 'pomodoro') {
            this.setState(() => ({
                minutesLeft: this.props.workTime,
                stageDurationMinutes: this.props.workTime
            }))
        } else if (this.state.workSet[this.state.workSetItem] === 'long break') {
            this.setState(() => ({
                minutesLeft: this.props.longBreak,
                stageDurationMinutes: this.props.longBreak
            }))
        } else if (this.state.workSet[this.state.workSetItem] === 'short break') {
            this.setState(() => ({
                minutesLeft: this.props.shortBreak,
                stageDurationMinutes: this.props.shortBreak
            }))
        }
    }

    render() {
        const {minutesLeft, button, secondsLeft} = this.state
        const {settingsShowing} = this.props

        return (
            <div className="timer">
                <svg className="svg" viewBox="0 0 352 352">
                    <circle className="timer__body timer__body--active" cx={176} cy={176} r={170}></circle>
                </svg>
                <div className="timer__clock">
                    {`${minutesLeft}:${secondsLeft}`}
                    <button className="timer__button" onClick={this.timer}>{button}</button>
                </div>
                {settingsShowing ? <Settings/> : null}
            </div>
        )
    }
}