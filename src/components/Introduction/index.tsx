import { ReactNode, useEffect, useState } from "react";
import "./Introduction.css";
import ImageDescription from "./ImageDescription";

function Introduction() {
  let imageDescriptionArray: ReactNode[] = [];
  imageDescriptionArray.push(
    <ImageDescription
      image={"/public/images/rocket.svg"}
      title={"Value Creation"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/analysis.svg"}
      title={"Visualization"}
      description={"This is an awsome description"}
      reversed={true}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/api.svg"}
      title={"Data Engineering"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/webdev.svg"}
      title={"Web Development"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/security.svg"}
      title={"Data Security"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/apple.svg"}
      title={"Outside the box"}
      description={"This is an awsome description"}
    ></ImageDescription>
  );
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
        {imageDescriptionArray}
      </div>
    </section>
  );
}

export default Introduction;
