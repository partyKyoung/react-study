import React, { Component } from "react";

interface Props {}
interface State {
  fruitsList: string[];
  value: string;
}

export default class MapState extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fruitsList: [],
      value: ""
    };
  }

  handleChange = (e: any): void => {
    this.setState({
      value: e.target.value
    });
  };

  handleInsert = (e: any): void => {
    const { fruitsList, value } = this.state;

    if (e.keyCode !== 13) {
      return;
    }

    this.setState({
      fruitsList: fruitsList.concat(value),
      value: ""
    });
  };

  handleDelete = (index: number): void => {
    const { fruitsList } = this.state;

    this.setState({
      fruitsList: [
        ...fruitsList.slice(0, index),
        ...fruitsList.slice(index + 1, fruitsList.length)
      ]
    });
  };

  render() {
    const { fruitsList, value } = this.state;

    return (
      <div>
        <ul>
          {fruitsList.map((fruits, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.handleDelete(index);
                }}
              >
                {fruits}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleInsert}
        />
      </div>
    );
  }
}
