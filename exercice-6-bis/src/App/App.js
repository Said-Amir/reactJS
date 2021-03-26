import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Section from '../components/Section/Section';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Section/>
      </div>
    );
  }
}

export default App;