import * as React from "react";
import MyComponent from "./state/MyComponent";

import "./App.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <MyComponent />;
  }
}

export default App;
