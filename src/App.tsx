import * as React from "react";
import Parent from "./props/Parent";

import "./App.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <Parent />;
  }
}

export default App;
