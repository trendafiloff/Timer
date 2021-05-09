import React, { Component } from "react";

export default class Setup extends Component {
  render() {
    const btnClassName = this.props.isStart ? "disable" : "";

    return (
      <div className="settings">
        <div className="settings-section">
          <label id="session-label">Work Duration</label>
          <div>
            <button
              className={btnClassName}
              id="session-decrement"
              onClick={this.props.onDecreaseSession}
            >
              -
            </button>
            <span id="session-length">{this.props.sessionLength} mins</span>
            <button
              className={btnClassName}
              id="session-increment"
              onClick={this.props.onIncreaseSession}
            >
              +
            </button>
          </div>
        </div>
        <div className="settings-section">
          <label id="session-label">Break Duration</label>
          <div>
            <button
              className={btnClassName}
              id="session-decrement"
              onClick={this.props.onDecreaseBreak}
            >
              -
            </button>
            <span id="session-length">{this.props.breakLength} mins</span>
            <button
              className={btnClassName}
              id="session-increment"
              onClick={this.props.onIncreaseBreak}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
