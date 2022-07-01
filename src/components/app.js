import { useEffect, useRef, useState } from "preact/hooks";
import Tabs from "./tabs";
import TabContent from "./tab-content";
import AnimatedCursor from "react-animated-cursor";
const App = () => {
  // const [dots, setDots] = useState([new Dot()]);
  const cursor = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const addCursor = () => {
    cursor.current.classList.remove("cursor-default");
    cursor.current.classList.add("cursor-active");
  };

  const removeCursor = () => {
    cursor.current.classList.remove("cursor-active");
    cursor.current.classList.add("cursor-default");
  };

  useEffect(() => {
    var links = document.querySelectorAll(
      'a, button, label, input[type="button"], input[type="submit"]'
    );

    addEventListener("mouseenter", addCursor);
    addEventListener("mouseleave", removeCursor);

    addEventListener("mousemove", (event) => {
      // console.log({ event });
      // console.log({ cursor })
      console.log({ x: event.pageX, y: event.pageY });
      cursor.current.style.left = event.pageX + "px";
      cursor.current.style.top = event.pageY + "px";
      // setMouse({ x: event.pageX, y: event.pageY });
    });
    return () => {
      removeEventListener("mousemove");
    };
  }, []);

  return (
    // <div className="app">
    <div id="frame" className="frame">
      <div className="piece output container">
        <div className="pipboy">
          <Tabs />
          <TabContent />
        </div>
        <div class="piece glow noclick"></div>
        <div class="piece scanlines noclick"></div>
      </div>
      <div ref={cursor} className="cursor">
        <img
          src="https://cybersandbox.ca/resources/nv-cursor.png"
          height={28}
        />
      </div>
    </div>
    // </div>
  );
};

export default App;
