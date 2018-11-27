import React, { Component } from 'react';
import './App.css';
import MemesList from './components/MemesList/MemesList';
import SearchField from './components/SearchField/SearchField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Meme Searcher
            </Typography>
            <SearchField />
          </Toolbar>
        </AppBar>
        <MemesList />
      </div>
    );
  }
}

export default App;
