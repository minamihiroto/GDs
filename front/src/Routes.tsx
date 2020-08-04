import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
