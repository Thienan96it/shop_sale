
import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product cao ngoc dieu
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Home from "views/Home/Home.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";


var hist = createBrowserHistory();
function App() {
    return (
    <Router history={hist}>
      <Switch>
        <Route path="/components" component={Components} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    );
}

export default App;