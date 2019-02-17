import * as React from "react";
import ParentRef from "./ref/ParentRef";

import "./App.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <ParentRef />;
  }
}

export default App;
