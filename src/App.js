import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div>
        <h1> NASA API APP</h1>
        <Home />
      </div>
    </Router>
  );
}
export default App;
