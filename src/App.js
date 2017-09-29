import React, { Component } from 'react';
import './App.css';
import UiTesterMaterialUi from './components/UiTesterMaterialUi'
import UITesterAntd from './components/UiTesterAntd'
import APIFetchTester from './components/APIFetchTester'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Framewok App</h2>
        </div>
        <p className="App-intro">
          App Intro
        </p>
        <UiTesterMaterialUi/>
        <UITesterAntd/>
        <APIFetchTester/>
      </div>
    );
  }
}

export default App;
