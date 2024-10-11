// import { TiHome } from "react-icons/ti";
import "./Header.css";
import { ReactNode, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import NameLogo from "./NameLogo";
import FloatingCard from "../FloatingCard";

type Props = {
  children: ReactNode;
  scrolled: boolean;
};

const Header = ({ children, scrolled }: Props) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleClick = () => {
    setIsCardVisible(true);
  };

  return (
    <nav
      className={`clearfix inria-sans-regular ${scrolled ? "scrolled" : ""}`}
    >
      <div className="home">
        <Link className="logo-link" to="/">
          <NameLogo></NameLogo>

          {/* <TiHome className="home-icon"></TiHome> */}
        </Link>
      </div>
      <IoMdMenu
        className="hamburger-menu no-desktop-view"
        onClick={handleClick}
      />
      <div className="buttons-header desktop-view">{children}</div>
      <FloatingCard
        description={""}
        children={
          <div className="hamburguer-options">
            <Link className="logo-link" to="/me">
              <p>About Me</p>
            </Link>
            <Link className="logo-link" to="/experience">
              <p>Experience</p>
            </Link>
            <Link className="logo-link" to="/education">
              <p>Education</p>
            </Link>
          </div>
        }
        visible={isCardVisible}
        controlVisible={setIsCardVisible}
        hasChildren={true}
      ></FloatingCard>
    </nav>
  );
};

export default Header;
