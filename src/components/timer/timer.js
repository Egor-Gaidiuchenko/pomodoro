import React, { Component } from "react";

import "./timer.scss";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workMinutes: 0,
            workSeconds: '0' + 0,
            longBreak: this.props.longBreak,
            shortBreak: this.props.shortBreak,
            circles: this.props.circles,
            sets: this.props.sets,
            active: false, 
            button: 'start',
            workSet: this.workSetCreator(this.props.circles, this.props.sets), 
            item: 0
        }
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

    timer = () => {
        this.setState(() => ({
            active: !this.state.active
        }))
        
        if (!this.state.active) {
            this.setTimerInterval(this.state.workSet[this.state.item])
        }
    }

    setTimerInterval(workStage) {
        if (this.state.workMinutes === 0 && this.state.workSeconds === '00') {
            this.setState(state => ({
                item: ++state.item
            }))
    
            this.props.onChangeActiveInterval(workStage)
    
            let minutes;

            if (workStage === 'pomodoro') {
                minutes = this.props.workTime
            } else if (workStage === 'short break') {
                minutes = this.props.shortBreak
            } else if (workStage === 'long break') {
                minutes = this.props.longBreak
            }

            let currentTimerCircle = Math.round(+window.getComputedStyle(document.querySelector('.timer__body')).strokeDasharray.slice(0, -2));
            let circleStep = Math.round(currentTimerCircle / (60 * minutes))

            this.setState(() => ({
                workMinutes: minutes,
                currentTimerCircle: currentTimerCircle,
                circleStep: circleStep
            }))
        }

        let interval = setInterval(() => {
            if (this.state.active) {
                if (this.timerOnGoing() && this.state.workSet[this.state.item]) {
                    clearInterval(interval)
                    this.setTimerInterval(this.state.workSet[this.state.item])
                }
                this.timerCircle(this.state.currentTimerCircle, this.state.circleStep)
            } else {
                this.timerPause(interval)
            }
        }, 1000)
    }

    timerOnGoing() {
        if (+this.state.workSeconds > 10) {
            this.setState(state => ({
                workSeconds: --state.workSeconds,
                button: 'pause'
            }))
        } else if (+this.state.workSeconds > 0 && +this.state.workSeconds <= 10) {
            this.setState(state => ({
                workSeconds: '0' + --state.workSeconds,
                button: 'pause'
            }))
        } else {
            if (this.state.workMinutes > 0) {
                this.setState(state => ({
                    workMinutes: --state.workMinutes,
                    workSeconds: 59,
                    button: 'pause'
                }))
            } else {    
                return true;
            }
        }
    }

    timerPause(interval) {
        clearInterval(interval)
        this.setState(() => ({
            button: 'start'
        }))
    }

    timerCircle(currentTimerCircle, circleStep) {
        const circle = document.querySelector('.timer__body');
        circle.classList.add('timer__body--active');

        this.setState(() => ({
            currentTimerCircle: currentTimerCircle -= circleStep
        }))

        if (currentTimerCircle - circleStep < 0) {
            this.setState(() => ({
                currentTimerCircle: Math.round(+window.getComputedStyle(document.querySelector('.timer__body')).strokeDasharray.slice(0, -2))
            }))
        }
        console.log(currentTimerCircle)
        circle.style.strokeDashoffset = this.state.currentTimerCircle
    }

    render() {
        const {workMinutes, button, workSeconds} = this.state

        return (
            <div className="timer">
                <svg className="svg" viewBox="0 0 352 352">
                    <circle className="timer__body" cx={176} cy={176} r={170}></circle>
                </svg>
                <div className="timer__clock">
                    {`${workMinutes}:${workSeconds}`}
                    <button className="timer__button" onClick={this.timer}>{button}</button>
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