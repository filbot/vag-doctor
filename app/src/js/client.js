import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Howto from "./pages/Howto";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path='howto' component={Howto}></Route>
      <Route path='contact' component={Contact}></Route>
    </Route>
  </Router>,
app);
