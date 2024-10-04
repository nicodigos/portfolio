import { ReactNode, useState, useEffect } from "react";
import BrandBox from "./BrandBox";
import "./Brand.css";

function Brand() {
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

  const brandsListName: string[] = [
    "directv.png",
    "disney.png",
    "gobierno_colombia.png",
    "warner.jpg",
    "rappi.png",
    "siigo.png",
  ];

  const brandsList: ReactNode[] = [];
  for (let brand of brandsListName) {
    brandsList.push(
      <BrandBox
        key={brand}
        imageUrl={`/images/${brand}`}
        transparency={brand == "disney.png" ? true : false}
      ></BrandBox>
    );
  }

  return (
    <section
      className="brand-section inria-sans-light"
      style={{
        height: `${
          windowHeight / window.screen.height > 0.8
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
