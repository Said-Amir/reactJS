import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()

    let tableau = [
      "salut",
      "salut",
      "salut",
      "salut",
      "salut"
    ]

    this.state = {
      tableau : tableau,
      longueur : tableau.length,
    }
  }

  changeTableau = () => {
    let myTableau = [...this.state.tableau];
    myTableau.shift();
    this.setState({
      tableau : myTableau,
      longueur : myTableau.length
    })
    console.log(this.state.tableau);
  }

  render(){
    if (this.state.longueur == 1) {
      return (
        <div className="App2">
          <h1>La longueur du tableau vaut : {this.state.longueur}</h1>
          <button onClick={() => this.changeTableau()}>Remove</button>
        </div>
      );
    }else if(this.state.longueur == 0){
      return (
        <div className="App1">
          <h1>La longueur du tableau vaut : {this.state.longueur}</h1>
          <button onClick={() => this.changeTableau()}>Remove</button>
        </div>
      );
    }else{
      return (
        <div className="App">
          <h1>La longueur du tableau vaut : {this.state.longueur}</h1>
          <button onClick={() => this.changeTableau()}>Remove</button>
        </div>
      );
    }
  }

}

export default App;