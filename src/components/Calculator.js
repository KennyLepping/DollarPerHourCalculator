import React, { useState, useEffect } from "react";

export default function Calculator() {
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
  }, [hourlyRate, hours, minutes, seconds, result]);
  return (
      <form className="calculator">
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
          <span style={result > 0 ? { color: "rgb(0, 186, 0)" } : {}}>
            ${result}
          </span>
        </div>
      </form>
  );
}
