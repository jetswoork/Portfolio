import "./styles.css";
import cursor from "../../assets/png/cursor.png";
import balon from "../../assets/png/balon.png";
import { useEffect } from "react";
import { useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 1;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
    });
  }, []);

  return <img ref={cursorRef} className="cursor" src={cursor} alt="" />;
};
