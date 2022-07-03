import { useState } from "preact/hooks";
import Interface from "../routes/interface";
import Terminal from "../routes/terminal";

const App = () => {
  const [isAgreed, setAgree] = useState(false);

  return (
    <div>
      <Terminal onAgree={() => setAgree(true)} />
      <Interface zIndex={isAgreed ? 0 : -4} />
      {/* <Interface /> */}
      {/* {isAgreed ? <Interface /> :} */}
    </div>
  );
};

export default App;
