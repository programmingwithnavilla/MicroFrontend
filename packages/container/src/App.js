import React from "react";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import BookingApp from "./components/BookingApp";
import HelloVueApp from "./components/HelloVueApp";
import ProfileApp from "./components/ProfileApp";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <Link to="/">home</Link>
    <br />
    <Link to="/react">Micro1: use react</Link>
    <br />
    <Link to="/vue">Micro2: use vue</Link>
    <br />
    <Link to="/profile">Micro3: use React Profile</Link>
  </div>
);

export default () => {
  return (
    <Router history={history}>
      <Header />
      <hr />
      <Switch>
        <Route path="/vue" component={HelloVueApp} />
        <Route path="/profile" component={ProfileApp} />
        <Route path="/" component={BookingApp} />
      </Switch>
    </Router>
  );
};
