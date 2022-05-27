import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import Homescreen from "./pages/Homescreen";
import UserMainPage from "./pages/UserMainPage";
import TTSPage from "./pages/TTSPage";
import Map from "./pages/Map";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/userpage" element={<UserMainPage />} />
        <Route path="/userpage/tts" element={<TTSPage />} />
        <Route path="/userpage/map" element={<Map />} />
        <Route path="/userpage/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
