import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import "./codebase.min.css";

import "./App.css";


import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Listing from "./components/Listing";
import UsersListing from "./components/UsersListing";



const loading = () => null;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/usersListing" component={UsersListing} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/usersListing" component={Listing} />
            {<Redirect from="/" to={"/signUp"} />}
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
