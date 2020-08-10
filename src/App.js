import React from 'react';
import { Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Welcome from "./components/welcome/Welcome"
import Clock from "./components/clock/Clock"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
