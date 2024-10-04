import { ReactNode, useState, useEffect } from "react";
import "./Banner.css";

type Props = {
  children: ReactNode;
};

function Banner({}: Props) {
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
    <>
      <div
        className="banner inria-sans-regular"
        style={{
          height: `${
            windowHeight / window.screen.height > 0.8
              ? "100vh"
              : (window.screen.height * 0.8).toString() + "px"
          }`,
        }}
      >
        <div className="banner-center">
          <div className="content">
            <h1>Nicolas Peralta</h1>
            <p className="inria-sans-light">
              Business Intelligence | Fullstack Developer
            </p>
            {/* <div id="button-panel">{children}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
