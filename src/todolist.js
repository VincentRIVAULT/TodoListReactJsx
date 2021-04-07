import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./todolist.css";

class Todolist extends Component{
  render(){
    return(
      <div className="todolist">
        <header className="todolist-header">
          <h1> Ma TodoList ! </h1>
        </header>
        <section className="todolist-section">
          <h2>Liste de courses :</h2>
        </section>
      </div>
    );
  }
}

export default hot(module)(Todolist);