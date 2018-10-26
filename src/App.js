import React, { Component } from 'react';
import './App.css';
import MemesList from './components/MemesList/MemesList';
import SearchField from './components/SearchField/SearchField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField />
        <MemesList />
      </div>
    );
  }
}

export default App;
