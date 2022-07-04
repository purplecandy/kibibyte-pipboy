import { useEffect, useRef, useState } from "preact/hooks";
import Interface from "../routes/interface";
import Terminal from "../routes/terminal";
import { sounds, soundTypes } from "../utils";

const App = () => {
  const [isAgreed, setAgree] = useState(false);

  const soundRefs = useRef({
    nav_tab_click: useRef(),
    tab_click: useRef(),
    slide_click: useRef(),
    scifi_click: useRef(),
  });

  const playSound = (type) => {
    const ref = soundRefs.current[type];
    console.log("Refs", { soundRefs });
    if (!ref) console.error("Invalid sound type defined");
    ref.current.play();
  };

  const onClickListener = (event) => {
    const attributes = Object.values(event.target.attributes);
    console.log("Click event", { attributes });
    const dataPlaySound = attributes.find((e) => e.name === "data-play-sound");
    if (dataPlaySound) {
      console.log("Play the sound");
      playSound(dataPlaySound.value);
    }
  };
  useEffect(() => {
    addEventListener("click", onClickListener);
    return () => {
      removeEventListener("click", onClickListener);
    };
  }, []);

  return (
    <div>
      <Terminal onAgree={() => setAgree(true)} />
      <Interface zIndex={isAgreed ? 0 : -4} />
      {/* <Interface /> */}
      {/* {isAgreed ? <Interface /> :} */}
      <audio
        ref={soundRefs.current.nav_tab_click}
        src={sounds.nav_tab_click}
      ></audio>
      <audio ref={soundRefs.current.tab_click} src={sounds.tab_click}></audio>
      <audio
        ref={soundRefs.current.slide_click}
        src={sounds.slide_click}
      ></audio>
      <audio
        ref={soundRefs.current.scifi_click}
        src={sounds.scifi_click}
      ></audio>
    </div>
  );
};

export default App;
