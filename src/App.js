import React, { Component } from 'react';
import List from './components/Todo/List'
import EvMile from './components/EvMile/EvMile'
import MiniTarget from './components/MiniTarget/MiniTarget'
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
       <List />
       <MiniTarget />
       <EvMile />
      </header>
    </div>
  );
}
}

export default App;
