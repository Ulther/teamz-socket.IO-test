import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer } from "./Api";

class App extends Component {
  state = {
    timestamp: "no timestamp yet"
  };
  render() {
    return <div>This is the timer value: {this.state.timestamp}</div>;
  }
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }
}

export default App;
