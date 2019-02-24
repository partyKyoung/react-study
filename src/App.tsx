import * as React from "react";
import Map from "./map/Map";

import "./App.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <Map />;
  }
}

export default App;
