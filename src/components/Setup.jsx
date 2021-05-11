import React, { Component } from "react";

export default class Setup extends Component {
  render() {
    const btnClassName = this.props.isStart ? "disable" : "";

    return (
      <div className="settings">
        <div className="settings-section">
          <label
            id="session-label"
            style={{ color: this.props.bodyHeaderContainerC }}
          >
            Work Duration
          </label>
          <div>
            <button
              className={btnClassName}
              id="session-decrement"
              onClick={this.props.onDecreaseSession}
              style={{ borderColor: this.props.bodyHeaderContainerC }}
            >
              -
            </button>
            <span
              id="session-length"
              style={{ color: this.props.bodyHeaderContainerC }}
            >
              {this.props.sessionLength} {this.props.workMins}
            </span>
            <button
              style={{ borderColor: this.props.bodyHeaderContainerC }}
              className={btnClassName}
              id="session-increment"
              onClick={this.props.onIncreaseSession}
            >
              +
            </button>
          </div>
        </div>
        <div className="settings-section">
          <label
            id="session-label"
            style={{ color: this.props.bodyHeaderContainerC }}
          >
            Break Duration
          </label>
          <div>
            <button
              style={{ borderColor: this.props.bodyHeaderContainerC }}
              className={btnClassName}
              id="session-decrement"
              onClick={this.props.onDecreaseBreak}
            >
              -
            </button>
            <span
              id="session-length"
              style={{ color: this.props.bodyHeaderContainerC }}
            >
              {this.props.breakLength} {this.props.breakMins}
            </span>
            <button
              style={{ borderColor: this.props.bodyHeaderContainerC }}
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
