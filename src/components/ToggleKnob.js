import React from "react";

export default class ToggleKnob extends React.Component {
  render() {
    return (
      <span
        className={`toggleKnob 
                      ${this.props.isOn ? "isActive" : ""}`}
      ></span>
    );
  }
}
