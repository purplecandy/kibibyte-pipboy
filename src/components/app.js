import { useEffect, useRef, useState } from "preact/hooks";
import Tabs from "./tabs";
import TabContent from "./tab-content";
import AnimatedCursor from "react-animated-cursor";
import Router from "preact-router";
import Interface from "../routes/interface";
import Terminal from "../routes/terminal";
const App = () => {
  const [isAgreed, setAgree] = useState(false);
  return (
    <div>
      {isAgreed ? <Interface /> : <Terminal onAgree={() => setAgree(true)} />}
      {/* <Router>
        <Terminal path="/" />
        <Interface path="/interface" />
      </Router> */}
    </div>
  );
};

export default App;
