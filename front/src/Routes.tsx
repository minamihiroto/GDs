import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login, Register, Home } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
