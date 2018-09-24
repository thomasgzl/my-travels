// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels
          dest="Toronto"
          country="CANADA"
          photo="https://www.seetorontonow.com/wp-content/uploads/2017/12/cn-tower-dusk.jpg"
          distance="6 012 km"
        />
        <Travels
          dest="London"
          country="ENGLAND"
          photo="http://www.labass.net/wp-content/uploads/2018/03/londres.jpg"
          distance="1 042 km"
        />
      </div>
    );
  }
}

export default App;
