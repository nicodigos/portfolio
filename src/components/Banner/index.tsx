import { ReactNode, useState, useEffect } from "react";
import "./Banner.css";

type Props = {
  children: ReactNode;
};

function Banner({ children }: Props) {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // Función para actualizar el tamaño de la ventana
  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let smallScreen = false;
  let ultraSmallScreen = false;

  if (windowSize.width < 564) {
    smallScreen = true;
  }

  if (windowSize.width < 357) {
    ultraSmallScreen = true;
  }

  return (
    <>
      <div
        className="banner inria-sans-regular"
        style={{
          height: `${
            windowSize.height / window.screen.height > 0.8
              ? "100vh"
              : (window.screen.height * 0.8).toString() + "px"
          }`,
        }}
      >
        <div className="banner-center">
          <div className="content">
            {smallScreen ? (
              <>
                <h1 className="banner-quote">There are not</h1>
                <h1 className="banner-quote">impossible destinations,</h1>
                <h1 className="banner-quote">just untraveled journeys</h1>
              </>
            ) : (
              <>
                <h1 className="banner-quote">
                  There are not impossible destinations,
                </h1>
                <h1 className="banner-quote">just untraveled journeys</h1>
              </>
            )}

            {ultraSmallScreen ? (
              <>
                <p className="inria-sans-light job-titles">
                  Business Intelligence <br></br> Fullstack Developer
                </p>
              </>
            ) : (
              <p className="inria-sans-light job-titles">
                Business Intelligence | Fullstack Developer
              </p>
            )}

            <div id="button-panel">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
