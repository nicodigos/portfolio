import { ReactNode } from "react";
import "./Banner.css";

type Props = {
  children: ReactNode;
};

function Banner({ children }: Props) {
  return (
    <>
      <div className="banner inria-sans-regular">
        <div className="banner-center">
          <div className="content">
            <h1>Nicolas Peralta</h1>
            <p className="inria-sans-light">
              Business Intelligence | Fullstack Developer
            </p>
            <div id="button-panel">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
