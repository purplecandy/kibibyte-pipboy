import { useState } from "preact/hooks";
import Interface from "../routes/interface";
import Terminal from "../routes/terminal";

const App = () => {
  const [isAgreed, setAgree] = useState(false);

  return (
    <div>
      {isAgreed ? <Interface /> : <Terminal onAgree={() => setAgree(true)} />}
    </div>
  );
};

export default App;
