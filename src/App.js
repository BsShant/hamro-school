import React from "react";
import Login from "./pages/login-Page/login.page";
import DashBoard from './dashboard/dashboard.components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            props.userToken ? (
              <DashBoard />
            ) : (
              <Redirect to={`/login`} />
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            !props.userToken ? <Login /> : <Redirect to="/" />
          }
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.authMode.userToken,
  user: state.authMode.authUser,
});

export default connect(mapStateToProps)(App);
