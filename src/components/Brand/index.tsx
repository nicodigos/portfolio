import { ReactNode } from "react";
import BrandBox from "./BrandBox";
import "./Brand.css";

function Brand() {
  const brandsListName: string[] = [
    "directv.png",
    "disney.png",
    "gobierno_colombia.png",
    "rappi.png",
    "siigo.png",
  ];

  const brandsList: ReactNode[] = [];
  for (let brand of brandsListName) {
    brandsList.push(
      <BrandBox
        imageUrl={`/public/images/${brand}`}
        transparency={brand == "disney.png" ? true : false}
      ></BrandBox>
    );
  }

  return (
    <section className="brand-section inria-sans-light">
      <p className="brand-title">Some of my clients</p>
      <div className="brand-section-logos">{brandsList}</div>
    </section>
  );
}

export default Brand;
