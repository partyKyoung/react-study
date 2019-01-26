import React, { Component } from "react";

import Child from "./Child.tsx";

export default class Parent extends Component {
  render() {
    return <Child singer={123} song="test" />;
  }
}
