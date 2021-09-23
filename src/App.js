import React, { useState, useEffect } from "react";
import lightThemeBtn from "./assets/icons8-sun-96.png"
import darkThemeBtn from "./assets/icons8-moon-64.png"
import DarkMode from "./components/DarkMode"
import "./App.css";

function App() {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let resultCalculation =
      hourlyRate * hours +
      hourlyRate * (minutes / 60) +
      hourlyRate * (seconds / 60 / 60);

    setResult(resultCalculation.toFixed(2));

    //    let convertToSeconds = (hours * 3600) + (minutes * 60) + (seconds / 10)
    //    console.log(`convertToSeconds: ${convertToSeconds}`)
    //    let ratePerSecond = hourlyRate / 3600
    //    console.log(`ratePerSeconds: ${ratePerSecond}`)
    // setResult((convertToSeconds * ratePerSecond).toFixed(2));
  }, [hourlyRate, hours, minutes, seconds, result]);

  return (
    <>
      <header>
        <nav>
          <span className="title-text">Dollar Per Hour&nbsp;</span>Calculator
          <span className="theme-switcher"><DarkMode /></span>
        </nav>
      </header>
      <main>
        <form className="form-styling">
          <label className="input-name">Hours</label>
          <input
            className="block number-input"
            type="number"
            onChange={(e) => setHours(e.target.value)}
          />
          <label className="input-name">Minutes</label>
          <input
            className="block number-input"
            type="number"
            onChange={(e) => setMinutes(e.target.value)}
          />
          <label className="input-name">Seconds</label>
          <input
            className="block number-input"
            type="number"
            onChange={(e) => setSeconds(e.target.value)}
          />
          <hr />
          <label className="hourly-rate">Hourly Rate</label>
          <input
            className="block number-input"
            type="number"
            onChange={(e) => setHourlyRate(e.target.value)}
          />
          <div className="result">
            Result:{" "}
            <span style={result > 0 ? { color: "rgb(0, 255, 0)" } : {}}>
              ${result}
            </span>
          </div>
        </form>
      </main>
      <footer>
        Built by&nbsp;<a href="#">Kenny Lepping</a>
      </footer>
    </>
  );
}

export default App;
