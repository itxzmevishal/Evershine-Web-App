import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
   <div
  className="
    hidden lg:block
    fixed
    pointer-events-none
    z-[9999]
    w-[250px]
    h-[250px]
    rounded-full
    blur-[80px]
  "
  style={{
    left: position.x,
    top: position.y,
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle, rgba(255,213,74,0.12) 0%, rgba(255,213,74,0.06) 40%, transparent 75%)",
  }}
/>
  );
}

export default CustomCursor;