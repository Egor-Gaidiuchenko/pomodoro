import React from "react";
import AppHeader from "../header/header";
import Timer from "../timer/timer";
import Parameters from "../parameters/parameters";
import Settings from "../settings/settings";

import "./app.scss"

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Parameters/>
            <Timer/>
            <Settings/>
        </div>
    )
}

export default App;