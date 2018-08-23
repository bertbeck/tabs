import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import TagSelect from './components/TagSelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tabs Example</h1>
          <h5>Copyright (c) 2018 Beckmann Consulting LLC</h5>
        </header>

<TagSelect />

      </div>
    );
  }
}

export default App;
