import React, { Component } from "react";

import "./toggleSettings.scss"

export default class ToggleSettings extends Component {
    render() {
        return (
            <button className="settings" onClick={this.props.toggleMenu}>
                <svg id="Layer_1" version="1.1" viewBox="0 0 91 91"><path d="M90.668,35.091c0.17-0.643,0.08-1.326-0.25-1.902L78.813,13.115c-0.695-1.195-2.225-1.607-3.422-0.914   l-9.734,5.619c-1.791-1.283-3.707-2.391-5.727-3.307V3.269c0-1.383-1.121-2.504-2.506-2.504H34.23   c-1.385,0-2.504,1.121-2.504,2.504v11.246c-1.891,0.861-3.699,1.893-5.406,3.086l-9.678-5.736   c-0.572-0.338-1.252-0.434-1.896-0.271c-0.643,0.166-1.197,0.578-1.535,1.15L1.387,32.69c-0.338,0.57-0.436,1.254-0.271,1.898   c0.166,0.643,0.578,1.195,1.15,1.533l9.682,5.734c-0.154,1.305-0.229,2.523-0.229,3.695c0,1.039,0.061,2.117,0.189,3.309   L2.16,54.491c-0.576,0.334-0.996,0.881-1.166,1.521c-0.174,0.641-0.082,1.326,0.25,1.9l11.6,20.076   c0.691,1.197,2.225,1.609,3.422,0.914l9.736-5.621c1.793,1.285,3.711,2.391,5.725,3.307v11.244c0,1.385,1.119,2.504,2.504,2.504   h23.193c1.385,0,2.506-1.119,2.506-2.504V76.589c1.889-0.859,3.697-1.895,5.402-3.088l9.684,5.736   c1.188,0.705,2.727,0.311,3.432-0.879L90.27,58.413c0.336-0.572,0.434-1.256,0.271-1.898c-0.166-0.643-0.578-1.195-1.152-1.533   l-9.676-5.734c0.156-1.314,0.23-2.518,0.23-3.695c0-1.051-0.063-2.143-0.189-3.313l9.746-5.627   C90.074,36.282,90.496,35.733,90.668,35.091z M59.242,45.55c0,7.396-6.018,13.414-13.416,13.414   c-7.396,0-13.412-6.018-13.412-13.414c0-7.393,6.016-13.41,13.412-13.41C53.225,32.14,59.242,38.157,59.242,45.55z"/></svg>
            </button>
        )
    }
}

