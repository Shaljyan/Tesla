import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
    <Topbar />
    <Header /> 
    <Home />
    </div>
  );
}

export default App;
