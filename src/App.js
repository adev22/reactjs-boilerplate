import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "routes";

function App() {
  return (
    <div className="App">
      <h1>Hello App</h1>
      <Router>
        <Switch>
          {Routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
