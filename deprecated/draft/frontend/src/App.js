import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Homescreen from "./pages/Homescreen";
import UserMainPage from "./pages/UserMainPage";
import TTS from './pages/TTS';
import Map from './pages/Map';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/userpage" component={UserMainPage} />
          <Route exact path="/userpage/tts" component={TTS} />
          <Route exact path="/userpage/map" component={Map} />
          <Route exact path="/userpage/chat" component={Chat} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
