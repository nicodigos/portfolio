import { TiHome } from "react-icons/ti";
import "./Header.css";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <nav className="clearfix inria-sans-regular">
      <div className="home">
        <TiHome className="home-icon"></TiHome>
      </div>
      <div className="buttons-header">{children}</div>
    </nav>
  );
};

export default Header;
