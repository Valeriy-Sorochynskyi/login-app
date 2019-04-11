import React, { Component } from 'react';
// import { Route, Switch, Link } from "react-router-dom";
import {getUsers} from './api/users';
import './App.css';

class App extends Component {
  componentDidMount() {
    getUsers().then(console.log)
  }
  render() {
    return (
      <div className="App">
        Hello 123!
      </div>
    );
  }
}

export default App;
