import React, { Component } from "react";

export default class Map extends Component {
  constructor() {
    super();

    this.fruitsList = ["사과", "바나나", "오렌지", "체리"];
  }

  render() {
    return (
      <ul>
        {this.fruitsList.map((fruits, index) => {
          return <li key={index}>{fruits}</li>;
        })}
      </ul>
    );
  }
}
