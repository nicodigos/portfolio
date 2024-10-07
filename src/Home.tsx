import Header from "./components/Header";
import Banner from "./components/Banner";
import ButtonsList from "./components/ButtonsList";
import Introduction from "./components/Introduction";
import Brand from "./components/Brand";
import "./Home.css";
import { useEffect, useState, ReactNode } from "react";
import ImageDescription from "./components/ImageDescription";
import QuoteSection from "./components/QuoteSection";

type Props = {
  links: string[][];
};

function Home({ links }: Props) {
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
      title={"Outside the box"}
      description={"This is an awsome description"}
    ></ImageDescription>
  );

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
    <>
      <Header
        children={
          <ButtonsList
            labels={links.slice(0, 3)}
            style={!scrolled ? "style-one" : "style-three"}
            hover_style="style-four"
          ></ButtonsList>
        }
        scrolled={scrolled}
      ></Header>
      <Banner
        children={
          <ButtonsList labels={links.slice(3)} style="style-two"></ButtonsList>
        }
      ></Banner>
      <QuoteSection></QuoteSection>
      <Introduction children={imageDescriptionArray}></Introduction>
      <Brand></Brand>
    </>
  );
}

export default Home;
