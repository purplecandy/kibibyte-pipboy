import { useEffect, useRef, useState } from "preact/hooks";

const MouseMoveEffect = ({
  factorX = 0.5,
  factorY = 0.5,
  maxDegree = 90,
  children,
}) => {
  const ref = useRef();

  const eventListener = (event) => {
    // console.log("We moving!");
    const mouseX = event.pageX / window.innerWidth;
    const mouseY = event.pageY / window.innerHeight;
    const ydeg = mouseX * maxDegree - factorX * maxDegree;
    const xdeg = -factorY * (mouseY * maxDegree - factorY * maxDegree);
    ref.current.style.transform = `rotateY(${ydeg}deg) rotateX(${xdeg}deg)`;
  };

  useEffect(() => {
    return () => {
      removeEventListener("mousemove", eventListener);
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={eventListener}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        transform: `rotateY(0deg) rotateX(0)`,
      }}
    >
      {children}
    </div>
  );
};

export default MouseMoveEffect;
