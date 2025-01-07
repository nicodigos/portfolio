import { ReactNode, useState, useEffect } from "react";
import BrandBox from "./BrandBox";
import "./Brand.css";

function Brand() {
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
  // let innerHeightAtLoad = window.innerHeight;

  if (windowSize.width < 1024) {
    smallScreen = true;
  }

  const brandsListName: string[] = [
    "directv.png",
    "disney.png",
    "gobierno_colombia.png",
    "warner.jpg",
    "rappi.png",
    "siigo.png",
    "ifood.png",
    "alfa.png",
    "star.png",
    "bavaria.png",
  ];

  const brandsList: ReactNode[] = [];
  for (let brand of brandsListName) {
    brandsList.push(
      <BrandBox
        key={brand}
        imageUrl={`/react-portf/images/${brand}`}
        transparency={brand == "disney.png" ? true : false}
      ></BrandBox>
    );
  }

  return (
    <section
      className="brand-section inria-sans-light"
      style={{
        height: smallScreen
          ? "auto"
          : `${
              windowSize.height / window.screen.height > 0.8
                ? "100vh"
                : (window.screen.height * 0.8).toString() + "px"
            }`,
      }}
    >
      <p className="brand-title">Some of my clients</p>
      <div className="brand-section-logos">{brandsList}</div>
    </section>
  );
}

export default Brand;
