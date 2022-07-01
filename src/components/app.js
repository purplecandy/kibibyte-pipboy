import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Tabs from "./tabs";
import TabContent from "./tab-content";

const App = () => (
  <div id="app">
    <div id="frame" className="frame">
      <div className="piece output container">
        <div className="pipboy">
          <Tabs />
          <TabContent />
        </div>
      </div>
    </div>
  </div>
);

export default App;
