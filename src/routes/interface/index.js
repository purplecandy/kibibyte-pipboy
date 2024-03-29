import { useEffect, useRef, useState } from "preact/hooks";
import Tabs from "../../components/tabs";
import TabContent from "../../components/tab-content";

const Interface = ({ display, zIndex }) => {
  // const [dots, setDots] = useState([new Dot()]);
  const cursor = useRef();

  const addCursor = () => {
    cursor.current.classList.remove("cursor-default");
    cursor.current.classList.add("cursor-active");
  };

  const removeCursor = () => {
    cursor.current.classList.remove("cursor-active");
    cursor.current.classList.add("cursor-default");
  };

  useEffect(() => {
    addEventListener("mouseenter", addCursor);
    addEventListener("mouseleave", removeCursor);

    addEventListener("mousemove", (event) => {
      // console.log({ event });
      // console.log({ cursor })
      //   console.log({ x: event.pageX, y: event.pageY });
      cursor.current.style.left = event.pageX + "px";
      cursor.current.style.top = event.pageY + "px";
      // setMouse({ x: event.pageX, y: event.pageY });
    });
    return () => {
      removeEventListener("mousemove");
    };
  }, []);

  return (
    <div className="bbody" style={{ zIndex, display }}>
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
            src="https://res.cloudinary.com/kibibyte/image/upload/v1656953740/nv-cursor_ha9i6j.png"
            height={28}
          />
        </div>
      </div>
    </div>
  );
};

export default Interface;
