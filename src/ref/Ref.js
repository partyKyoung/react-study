import React, { Component } from "react";

export default class Ref extends Component {
  constructor() {
    super();

    this.input = null;
  }

  handleFocus = () => {
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.input = input;
          }}
        />
        <button type="button" onClick={this.handleFocus} />
      </div>
    );
  }
}
