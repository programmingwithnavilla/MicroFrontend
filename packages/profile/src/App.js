import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";

const loginForm = () => <div>Login Form</div>;
const signupForm = () => <div>Hello React!sss</div>;

export default ({ history }) => {
  return (
    <div>
      <h1>This is a profile Project</h1>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={loginForm} />
          <Route path="/signup" component={signupForm} />
        </Switch>
        <br />
        <Link to="/login">login</Link>
        <br />
        <Link to="/signup">profile</Link>
      </Router>
    </div>
  );
};
