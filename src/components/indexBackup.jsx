import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  let userHours = 0;
  let userMinutes = 55;
  let userSeconds = 0;

  let userBreakHours = 0;
  let userBreakMinutes = 5;
  let userBreakSeconds = 0;

  let userState = "Not started";

  const [hours, setHours] = useState(userHours);
  const [minutes, setMinutes] = useState(userMinutes);
  const [seconds, setSeconds] = useState(userSeconds);

  const [intervalState, setIntervalState] = useState(userState);

  function decreaseTimer() {}

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      setIntervalState("Work time");
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
        if (hours !== 0 && minutes === 0 && seconds === 0) {
          setSeconds(59);
          setMinutes(59);
          setHours(hours - 1);
        }
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIntervalState("Break time");
          setHours(userBreakHours);
          setMinutes(userBreakMinutes);
          setSeconds(userBreakSeconds);
        }
        if (hours !== 0 && minutes !== 0 && seconds !== 0) {
          setIntervalState("Work time");
          setHours(userHours);
          setMinutes(userMinutes);
          setSeconds(userSeconds);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 2000);
  }, [seconds]);

  const timerHours = hours < 10 ? `0${hours}` : hours;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const timerUserHours = userHours < 10 ? `0${userHours}` : userHours;
  const timerUserMinutes = userMinutes < 10 ? `0${userMinutes}` : userMinutes;
  const timerUserSeconds = userSeconds < 10 ? `0${userSeconds}` : userSeconds;

  const timerUserBreakHours =
    userBreakHours < 10 ? `0${userBreakHours}` : userBreakHours;
  const timerUserBreakMinutes =
    userBreakMinutes < 10 ? `0${userBreakMinutes}` : userBreakMinutes;
  const timerUserBreakSeconds =
    userBreakSeconds < 10 ? `0${userBreakSeconds}` : userBreakSeconds;

  return (
    <React.Fragment>
      <div className="app">
        <header className="header">
          <p>Customizable Timer</p>
        </header>
        <div className="timer">
          <div className="container1">
            <h2>Work Duration:</h2>
            <p>
              <img className="minusButton" src="/images/buttons.png" alt="" />
              <span>
                {timerUserHours}:{timerUserMinutes}:{timerUserSeconds}
              </span>
              <img
                className="plusButton"
                onClick={decreaseTimer}
                src="/images/buttons.png"
                alt=""
              />
            </p>
            <h2>Break Duration:</h2>
            <p>
              <img className="minusButton" src="/images/buttons.png" alt="" />
              <span>
                {timerUserBreakHours}:{timerUserBreakMinutes}:
                {timerUserBreakSeconds}
              </span>
              <img className="plusButton" src="/images/buttons.png" alt="" />
            </p>
            <span className="currentSession">
              <h2 className="currentSession">Current Session:</h2>
              <h2 className="currentSession">{intervalState}</h2>
              <span className="currentSession">
                {timerHours}:{timerMinutes}:{timerSeconds}
              </span>
            </span>
            <div className="bottomButtonArea">
              <img className="playButton" src="/images/buttons.png" alt="" />
              <img className="pauseButton" src="/images/buttons.png" alt="" />
              <img className="stopButton" src="/images/buttons.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footarea">
        <p className="footer"> Footer • 2021</p>
      </div>
    </React.Fragment>
  );
}
