import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Homescreen from "./pages/homescreen";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/userhome" component={UserPage} />
          <Route exact path="/guardianhome" component={Login} />
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/lectureroom" component={LectureRoom} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
