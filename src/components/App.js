import React, { Component } from "react";
import Setup from "./Setup";
import Timer from "./Timer";
import Controller from "./Controller";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.audioBeep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: "Work Session",
      timeLeftInSecond:
        Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null,
    };
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }

  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1,
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1,
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60,
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60,
      });
    }
  }

  onReset() {
    this.setState({
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: "Work Session",
      timeLeftInSecond:
        Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null,
    });

    this.audioBeep.current.pause();
    this.audioBeep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000),
      });
    } else {
      this.audioBeep.current.pause();
      this.audioBeep.current.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null,
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1,
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === "Work Session") {
        this.setState({
          timeLabel: "Break Session",
          timeLeftInSecond: this.state.breakLength * 60,
        });
      } else {
        this.setState({
          timeLabel: "Work Session",
          timeLeftInSecond: this.state.sessionLength * 60,
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h2 className="header-text">Customizable Timer</h2>
        </div>
        <div className="app">
          <div className="container1">
            <div className="content">
              <Setup
                breakLength={this.state.breakLength}
                sessionLength={this.state.sessionLength}
                isStart={this.state.isStart}
                onDecreaseBreak={this.onDecreaseBreak}
                onDecreaseSession={this.onDecreaseSession}
                onIncreaseBreak={this.onIncreaseBreak}
                onIncreaseSession={this.onIncreaseSession}
              />

              <Timer
                timeLabel={this.state.timeLabel}
                timeLeftInSecond={this.state.timeLeftInSecond}
              />

              <Controller
                onReset={this.onReset}
                onStartStop={this.onStartStop}
                isStart={this.state.isStart}
              />

              <audio
                id="beep"
                preload="auto"
                src="https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Game%20Enginng%20Buzzer-14157-Free-Loops.com.mp3"
                ref={this.audioBeep}
              ></audio>
            </div>{" "}
            <div className="description">
              <p>
                This is a customizable timer application that is supported by
                both desktop and mobile browsers. Its main purpose is to help
                its users efficiently manage their time while working, studying,
                or doing anything else that requires focus and concentration.
              </p>
              <p>
                It was inspired by the Pomodoro Technique - a time management
                method that uses a timer to break down work into intervals,
                traditionally 25 minutes in length, separated by short breaks.
                The technique was developed by Francesco Cirillo in the late
                1980s.
              </p>
              <p>
                If you want to follow the technique, it is advised that you
                split your work into 25-minute intervals, followed by 5 minutes
                of break. After 4 work intervals have been completed, a longer
                break should be taken. Afterwards, the cycle of 4 work intervals
                with 3 small break continues, followed by a longer break after
                the 4th work interval.
              </p>
            </div>
          </div>
        </div>
        <div className="footarea">
          <div className="footer">
            Designed by
            <a
              style={{ textDecoration: "none", color: "#2194f0" }}
              href="https://serimi.github.io"
            >
              {" "}
              Krasimir Trendafiloff
            </a>{" "}
            • 2021
          </div>
        </div>
      </React.Fragment>
    );
  }
}
