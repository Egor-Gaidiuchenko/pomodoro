import React, { Component } from "react";

import "./indicator.scss"

export default class Indicator extends Component {
    render() {
        const {active} = this.props;

        const elements = ["pomodoro", "short break", "long break"].map((item, index) =>  {
            let classNames = "indicator__item"
            
            if (index === active) {
                classNames += " indicator__item--active"
            }

            return (
                <div key={index} className={classNames}>{item}</div>
            )
        })

        return (
            <div className="indicator">
                {elements}
            </div>
        )
    }
}