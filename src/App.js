import React, { Component } from 'react';
import List from './components/List'
import EvMile from './components/EvMile/EvMile'
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
       <List name = "Austin" />
       <EvMile />
      </header>
    </div>
  );
}
}

export default App;
