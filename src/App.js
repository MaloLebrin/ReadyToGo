import React, { useState } from "react";
import "./App.scss";
import Header from "./header/Header";
import Switch from "./switch/Switch";

const App = () => {
    const [firstSwitch, setFirstSwitch] = useState(false);
    const [secondSwitch, setSecondSwitch] = useState(false);
    const [thirdSwitch, setThirdSwitch] = useState(false);
    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="switches">
                    <Switch switchButton={firstSwitch} setSwitch={setFirstSwitch} />
                    <Switch switchButton={secondSwitch} setSwitch={setSecondSwitch} />
                    <Switch switchButton={thirdSwitch} setSwitch={setThirdSwitch} />
                </div>
                <div className={`go-no-way ${firstSwitch && secondSwitch && thirdSwitch ? "go" : "no-way"}`}>
                    {firstSwitch && secondSwitch && thirdSwitch ? "Let's Go" : "No-Way Dude"}
                </div>
            </div>
        </div>
    );
};

export default App;
