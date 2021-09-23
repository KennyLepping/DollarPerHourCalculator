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
      hourlyRate * ((seconds / 10) / 60);

    //    let convertToSeconds = (hours * 3600) + (minutes * 60) + (seconds / 10)
    //    console.log(`convertToSeconds: ${convertToSeconds}`)
    //    let ratePerSecond = hourlyRate / 3600
    //    console.log(`ratePerSeconds: ${ratePerSecond}`)

    setResult(resultCalculation.toFixed(2));
    // setResult((convertToSeconds * ratePerSecond).toFixed(2));
  }, [hourlyRate, hours, minutes, seconds, result]);

  return (
    <>
      <main>
        <section className="calculation-section">
          <form>
            <div>
              Hours
              <input
                className="block"
                type="number"
                name="hours"
                defaultValue={hours || ""}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div>
              Minutes
              <input
                className="block"
                type="number"
                name="minutes"
                value={minutes || ""}
                onChange={(e) => setMinutes(e.target.value)}
              />
            </div>
            <div>
              Seconds
              <input
                className="block"
                type="number"
                name="seconds"
                value={seconds || ""}
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
            <div>
              Hourly Rate
              <input
                className="block"
                type="number"
                name="hourlyRate"
                defaultValue={hourlyRate || ""}
                onChange={(e) => setHourlyRate(e.target.value)}
              />
            </div>
            <div>Result: {result}</div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
