import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
// Pages
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";

// Components
import Navbar from "./components/navbar";

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
