import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Homescreen from "./pages/Homescreen";
import UserMainPage from "./pages/UserMainPage";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/userpage" component={UserMainPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
