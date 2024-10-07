import { ReactNode, useEffect, useState } from "react";
import "./Introduction.css";

type Props = {
  children: ReactNode[];
};

function Introduction({ children }: Props) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Función para actualizar el tamaño de la ventana
  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="introduction inria-sans-regular"
      style={{
        height: `${
          windowHeight / window.screen.height > 0.8
            ? "100vh"
            : (window.screen.height * 0.8).toString() + "px"
        }`,
      }}
    >
      <div className="inner-introduction-container">
        {children[0]}
        {children[1]}
        {children[2]}
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
    </section>
  );
}

export default Introduction;
