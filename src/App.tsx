import Header from "./components/Header";
import Banner from "./components/Banner";
import ButtonsList from "./components/ButtonsList";
import Introduction from "./components/Introduction";
import "./App.css";
import { useEffect, useState, ReactNode } from "react";
import ImageDescription from "./components/ImageDescription";

function App() {
  const [scrolled, setScrolled] = useState(false);

  let imageDescriptionArray: ReactNode[] = [];
  imageDescriptionArray.push(
    <ImageDescription
      image={"/public/images/eye.svg"}
      title={"Data Visualization"}
      description={"This is an awsome description"}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/app-store.svg"}
      title={"Data Visualization"}
      description={"This is an awsome description"}
      reversed={true}
    ></ImageDescription>,
    <ImageDescription
      image={"/public/images/pipe.svg"}
      title={"Data Visualization"}
      description={"This is an awsome description"}
    ></ImageDescription>
  );

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
    <>
      <Header
        children={
          <ButtonsList
            labels={["About Me", "Experience", "Education"]}
            style={!scrolled ? "style-one" : "style-three"}
            hover_style="style-four"
          ></ButtonsList>
        }
        scrolled={scrolled}
      ></Header>
      <Banner
        children={
          <ButtonsList
            labels={["Power BI", "D3.js"]}
            style="style-two"
          ></ButtonsList>
        }
      ></Banner>
      <Introduction children={imageDescriptionArray}></Introduction>
    </>
  );
}

export default App;
