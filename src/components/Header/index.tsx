import { TiHome } from "react-icons/ti";
import "./Header.css";

const Header = () => {
  return (
    <nav className="clearfix inria-sans-regular">
      <TiHome className="home"></TiHome>
      <ul>
        <li>About Me</li>
        <li>Experience</li>
        <li>Education</li>
      </ul>
    </nav>
  );
};

export default Header;
