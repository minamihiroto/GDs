import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login, Register, Home, Search, User, Follow, Review, Post, Show, After, ReviewPost} from "./pages";

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
        <Route exact path="/review" component={Review} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/show" component={Show} />
        <Route exact path="/after" component={After} />
        <Route exact path="/reviewpost" component={ReviewPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
