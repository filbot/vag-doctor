import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Howto from "./pages/Howto";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Allroad from "./components/Allroad";
import A4 from "./components/A4";
import S4 from "./components/S4";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path='howto' component={Howto}></Route>
      <Route path='contact' component={Contact}></Route>
      <Route path='allroad' component={Allroad}></Route>
      <Route path='a4' component={A4}></Route>
      <Route path='s4' component={S4}></Route>
    </Route>
  </Router>,
app);
