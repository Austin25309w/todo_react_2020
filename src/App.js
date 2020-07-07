import React from 'react';
import logo from './logo.svg';
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo</h1>
       <List/>
      </header>
    </div>
  );
}

export default App;
