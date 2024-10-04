// import { TiHome } from "react-icons/ti";
import "./Header.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import NameLogo from "./NameLogo";

type Props = {
  children: ReactNode;
  scrolled: boolean;
};

const Header = ({ children, scrolled }: Props) => {
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
      <div className="buttons-header">{children}</div>
    </nav>
  );
};

export default Header;
