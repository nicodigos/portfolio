import { ReactNode, useEffect, useState } from "react";
import "./Introduction.css";
import ImageDescription from "./ImageDescription";

function Introduction() {
  let imageDescriptionArray: ReactNode[] = [];
  imageDescriptionArray.push(
    <ImageDescription
      image={"/react-portf/images/rocket.svg"}
      key={"/react-portf/images/rocket.svg"}
      title={"Value Creation"}
      description={
        "A business, company, or organization exists to create value that did not previously exist in the world. That’s why my professional focus is always on contributing to maximizing that value creation, ensuring my clients are at the forefront of success."
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/react-portf/images/analysis.svg"}
      key={"/react-portf/images/analysis.svg"}
      title={"Visualization"}
      description={
        "A significant part of our brain evolved to interpret the images around us and make decisions. Today's world runs on data, but only through effective visualizations can the best decisions be made."
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/react-portf/images/api.svg"}
      key={"/react-portf/images/api.svg"}
      title={"Data Engineering"}
      description={
        "The best business ideas may fail to take off if they aren't backed by a reliable, robust, and efficient infrastructure. How you handle your data directly impacts the success of your decisions and predictions."
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/react-portf/images/webdev.svg"}
      key={"/react-portf/images/webdev.svg"}
      title={"Web Development"}
      description={
        "Your digital assets range from your face in the modern world to the home of your business. That’s why it’s crucial to maintain a clean appearance, a clear message, ensure optimal performance, and showcase plenty of style 😉."
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/react-portf/images/security.svg"}
      key={"/react-portf/images/security.svg"}
      title={"Data Security"}
      description={
        "If your data is your business's most valuable asset, you'll want to keep it secure, choose the best service providers, and follow the best practices. Trust me, and your data will be in good hands!"
      }
    ></ImageDescription>,
    <ImageDescription
      image={"/react-portf/images/apple.svg"}
      key={"/react-portf/images/apple.svg"}
      title={"Outside the box"}
      description={
        "It’s not just about finding creative solutions. Sometimes, rethinking problems in unique ways and being willing to shift our paradigms can lead to extraordinary results."
      }
    ></ImageDescription>
  );
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
  let innerHeightAtLoad = window.innerHeight;

  if (windowSize.width < 1024) {
    smallScreen = true;
  }

  return (
    <section
      className="introduction inria-sans-regular"
      style={{
        height: smallScreen
          ? "auto"
          : `${
              windowSize.height / window.screen.height > 0.8
                ? innerHeightAtLoad
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
