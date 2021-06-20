import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Uploads from "../components/Uploads";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Uploads} />
    </Switch>
  </Router>
);