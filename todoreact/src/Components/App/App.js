import React, { Component } from 'react';
import './App.css';
import Item from '../Item/Item';
import '../../scss/style.scss';

class App extends Component {

  state = {
    list : [],
    mode : "all"
  }
  i = 0
  onInput = (e) => {
    
    if (e.key == "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      this.setState({
        list : [...this.state.list,e.target.value]
      })
      console.log(this.state.list);
      this.i++;
      e.target.value = "";
    }
  }

  remove = (id) => {
    let myList = [...this.state.list];
    myList.splice(id,1);
    this.setState({
      list : myList
    })
  }

  edit = (value, id) => {
    let myList = [...this.state.list];
    myList[id] = value
    this.setState({
      list : myList
    })
  }

  onMode = (mode) => {
    console.log(mode);
    this.setState({
      mode : mode
    })
  }

  render(){
    return (
      <div className='container'>
        <h2 className="text-white text-center mt-5 mb-3">To Do List</h2>
        <div className="text-center">
          <button className="btn btn-sm mr-1 btn-secondary " onClick={ () => {this.onMode("all")}}>Toutes</button>
          <button className="btn btn-sm mr-1 btn-secondary " onClick={ () => {this.onMode("done")}}>Completées</button>
          <button className="btn btn-sm mr-1 btn-secondary " onClick={ () => {this.onMode("todo")}}>A faire</button>
        </div>
        <form className="text-center mt-5 formTodo mx-auto" action="">
          <input className="form-control" onKeyDown={(e) => this.onInput(e)} type="text" id="input" placeholder="Que dois-je faire ? "/>
        </form>
        
      {
        this.state.list.map((elem, index) => {
          return (
            <Item 
              content = {elem}
              id = {index}
              key = {index}
              remove = {this.remove}
              edit = {this.edit}
              mode = {this.state.mode}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;