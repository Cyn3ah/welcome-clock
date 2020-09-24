import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css'

import Welcome from "./components/welcome/Welcome"
import Clock from "./components/clock/Clock"
import Contact from "./components/contact/Contact"
import Navigation from "./components/navigation/Navigation"
import Jeopardy from "./components/jeopardy/Jeopardy"
import Error404 from "./components/error404/Error404.js"

// import { Route, Switch } from 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: ""
    }
  }

  updateScore = (score) => {
    this.setState((state, props) => ({
      score: score + this.state.data.value
    }))
  }

  render() {
    return (
      <div className="App">

        <Navigation />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props}
              name="Cynthia" />}
          />

          <Route
            path="/welcome/:name"
            render={(props) => <Welcome {...props}
              name={props.match.params.name} />}
          />

          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
