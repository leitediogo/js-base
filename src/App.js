import React, { Component } from 'react';
import './App.css';

import TestMaterialUI from './components/TestMaterialUI'
import TestAntd from './components/TestAntd'
import TestFetchAPI from './components/TestFetchAPI'
import TestUtils from './components/TestUtils'
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
        <TestMaterialUI />
        <TestAntd />
        <TestFetchAPI />
        <TestUtils />
      </div>
    );
  }
}

export default App;
