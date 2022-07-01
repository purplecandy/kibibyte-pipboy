import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <button type="button" class="btn btn-primary">
      Primary
    </button>
  </div>
);

export default App;
