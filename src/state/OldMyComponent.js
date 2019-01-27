import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    number: 0
  };

  handleUpdate = () => {
    const { number } = this.state;

    // state 업데이트
    this.setState({
      number: number + 1
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        {`Number: ${number}`}
        <button type="button" onClick={this.handleUpdate}>
          업데이트
        </button>
      </div>
    );
  }
}
