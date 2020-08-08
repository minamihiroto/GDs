import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login, Register, Home ,Search,User,Follow} from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user" component={User} />
        <Route exact path="/follow" component={Follow} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
