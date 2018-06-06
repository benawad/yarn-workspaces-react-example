import React, { Component } from "react";
import { add } from "@peanut/common";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{add(1, 2)}</p>
      </div>
    );
  }
}

export default App;