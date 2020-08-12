import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css'
import Welcome from "./components/welcome/Welcome"
import Clock from "./components/clock/Clock"
import Contact from "./components/contact/Contact"
import Navigation from "./components/navigation/Navigation"

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Navigation />
      

        <Switch>
          <Route 
            exact
            path="/"
            render={(props) => <Welcome {...props}
            name="Cynthia"/>}
          />
          <Route 
            path="/welcome/:name"
            render={(props) => <Welcome {...props}
            name={props.match.params.name} />}
          />

          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />

          <Route path="/error" component={Error} />
        </Switch>
          
      
      </div>
    );
  }
}

export default App;
