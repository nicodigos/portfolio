import { TiHome } from "react-icons/ti";
import "./Header.css";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change this value to the scroll position where you want the change to happen
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`clearfix inria-sans-regular ${scrolled ? "scrolled" : ""}`}
    >
      <div className="home">
        <TiHome className="home-icon"></TiHome>
      </div>
      <div className="buttons-header">{children}</div>
    </nav>
  );
};

export default Header;
