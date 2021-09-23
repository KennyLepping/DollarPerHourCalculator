import React, { useState, useEffect } from "react";
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
      hourlyRate * (seconds / 60  / 60);

    setResult(resultCalculation.toFixed(2));

    //    let convertToSeconds = (hours * 3600) + (minutes * 60) + (seconds / 10)
    //    console.log(`convertToSeconds: ${convertToSeconds}`)
    //    let ratePerSecond = hourlyRate / 3600
    //    console.log(`ratePerSeconds: ${ratePerSecond}`)
    // setResult((convertToSeconds * ratePerSecond).toFixed(2));
  }, [hourlyRate, hours, minutes, seconds, result]);

  return (
    <>
      <main>
        <section className="calculation-section">
          <form className="form-styling">
            <label className="input-name">Hours</label>
            <input
              className="block number-input"
              type="number"
              defaultValue={hours || ""}
              onChange={(e) => setHours(e.target.value)}
            />
            <label className="input-name">Minutes</label>
            <input
              className="block number-input"
              type="number"
              value={minutes || ""}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <label className="input-name">Seconds</label>
            <input
              className="block number-input"
              type="number"
              value={seconds || ""}
              onChange={(e) => setSeconds(e.target.value)}
            />
            <hr />
            <label className="hourly-rate">Hourly Rate</label>
            <input
              className="block number-input"
              type="number"
              defaultValue={hourlyRate || ""}
              onChange={(e) => setHourlyRate(e.target.value)}
            />
            <div className="result">Result: <span className="green-text">{result}</span></div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
