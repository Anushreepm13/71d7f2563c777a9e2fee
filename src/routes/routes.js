import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AstroidDetails from "../Components/AstroidDetails";
import Home from "../Components/Home";
import RandomAstroid from "../Components/RandomAstroid";

function Routes() {
  return;
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/RandomAstroid" exact component={RandomAstroid} />
      <Route path="/AstroidDetails" exact component={AstroidDetails} />
    </Switch>
  </Router>;
}

export default Routes;
