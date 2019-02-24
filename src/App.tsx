import * as React from "react";
import MapState from "./map/MapState";

import "./App.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return <MapState />;
  }
}

export default App;
