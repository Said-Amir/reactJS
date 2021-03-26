import React, { Component } from 'react';
import './App.css';
import Perso from '../components/perso/Perso';

class App extends Component{

  constructor(){
    super()
    this.state = {
      personne : [
        {
          nom : "Maktabi",
          prenom : "Said",
          age : 23,
          adresse : "Avenue Stiénon"
        },
        {
          nom : "Martinon",
          prenom : "Antoine",
          age : 32,
          adresse : "Avenue Romelaere"
        },
        {
          nom : " Liban",
          prenom : "Mahad",
          age : 26,
          adresse : "Avenue Nouvelle"
        }
      ]
    }
  }

  changeInfo = (i) => {
    let changeState = [...this.state.personne];
    changeState[i].prenom = prompt('prenom ?');
    changeState[i].age = prompt('age ?');
    changeState[i].adresse = prompt('adresse ?');

    this.setState({
      personne : changeState
    })
  }

  render(){
    return (
      <div className="App">
        <Perso nom = {this.state.personne[0].prenom} age = {this.state.personne[0].age} adresse = {this.state.personne[0].adresse} maFonction = {() => this.changeInfo(0)}/>
        <Perso nom = {this.state.personne[1].prenom} age = {this.state.personne[1].age} adresse = {this.state.personne[1].adresse} maFonction = {() => this.changeInfo(1)}/>
        <Perso nom = {this.state.personne[2].prenom} age = {this.state.personne[2].age} adresse = {this.state.personne[2].adresse} maFonction = {() => this.changeInfo(2)}/>
      </div>
    );
  }

}

export default App;