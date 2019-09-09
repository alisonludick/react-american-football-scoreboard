//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionHomeScore, setlionHomeScore] = useState(0);

    const [tigerHomeScore, settigerHomeScore] = useState(0);

    // for Lion's Score:
    const resetLionScore = () => {
        setlionHomeScore(0);
    };

    const incrementLionScore = () => {
        setlionHomeScore(lionHomeScore + 7);
    };

    const decrementLionScore = () => {
        setlionHomeScore(lionHomeScore - 1);
    };

    // for Tiger's Score:
    const resetTigersScore = () => {
        settigerHomeScore(0);
    };

    const incrementTigerScore = () => {
        settigerHomeScore(tigerHomeScore + 7);
    };

    const decrementTigerScore = () => {
        settigerHomeScore(tigerHomeScore - 1);
    };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionHomeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">32</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={incrementLionScore}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={decrementLionScore}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={incrementTigerScore}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={decrementTigerScore}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;