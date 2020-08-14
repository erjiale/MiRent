import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import { logoutUser } from "./redux/actions/userActions";
import { SET_USER } from "./redux/types";
// Pages
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
// Components
import Navbar from "./components/navbar";

const token = localStorage.token;
if (token && token !== "undefined") {
  // token exists
  axios.defaults.headers.common["auth-token"] = token;
  const decodedToken = jwt_decode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // token is expired
    store.dispatch(logoutUser());
  } else {
    // authenticate user
    store.dispatch({ type: SET_USER, payload: decodedToken._id });
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
