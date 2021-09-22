import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    hourlyRate: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    result: 0,
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.num]: value,
    });
  }
  //     let [hourlyRate, setHourlyRate] = useState();
  //   let [hours, setHours] = useState(0);
  //   let [minutes, setMinutes] = useState(0);
  //   let [seconds, setSeconds] = useState(0);
  //   let [result, setResult] = useState(0);

  //   function handleChange(event) {
  //     setHourlyRate(event.target.value);
  //     setHours(event.target.value);
  //     setMinutes(event.target.value);
  //     setSeconds(event.target.value);
  //     let resultCalculation = 0;
  //     resultCalculation =
  //       hourlyRate * hours +
  //       (hourlyRate * (minutes / 60) + hourlyRate * ((seconds * 0.1) / 60));
  //     setResult(resultCalculation);
  //   }

  return (
    <>
      <main>
        <section className="calculation-section">
          <form>
            <div>
              Hours
              <input
                className="block"
                type="text"
                name="hours"
                value={state.hours}
                onChange={handleChange}
              />
            </div>
            <div>
              Minutes
              <input
                className="block"
                type="text"
                name="minutes"
                value={state.minutes}
                onChange={handleChange}
              />
            </div>
            <div>
              Seconds
              <input
                className="block"
                type="text"
                name="seconds"
                value={state.seconds}
                onChange={handleChange}
              />
            </div>
            <div>
              Hourly Rate
              <input
                className="block"
                type="text"
                name="hourlyRate"
                value={state.hourlyRate}
                onChange={handleChange}
              />
            </div>
            <div>
              Result
              <input
                className="block"
                type="text"
                name="result"
                value={state.result}
                onChange={handleChange}
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
