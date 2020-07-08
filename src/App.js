import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/List'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        show: false
    }
};
render(){

  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo</h1>
       <List name = "Austin" />
      </header>
    </div>
  );
}
}

export default App;
