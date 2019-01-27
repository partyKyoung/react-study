import React, { Component } from "react";

interface Props {}
interface State {
  number: number;
}

export default class MyComponent extends Component<Props, State> {
  state = {
    number: 0
  };

  handleUpdate: any = () => {
    const { number } = this.state;
    // state 업데이트
    this.setState({
      number: number + 1
    });
  };

  render(): JSX.Element {
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
