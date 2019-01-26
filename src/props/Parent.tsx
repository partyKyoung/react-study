import * as React from "react";

import Child from "./Child";

interface Props {}
interface State {}

export default class Parent extends React.Component<Props, State> {
  render() {
    return <Child singer="Nell" song="Home" />;
  }
}
