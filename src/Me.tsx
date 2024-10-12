import Header from "./components/Header";
import ButtonsList from "./components/ButtonsList";
import SectionTitle from "./components/SectionTitle";
import SectionContent from "./components/SectionContent";
import Footer from "./components/Footer/Footer";

type Props = {
  links: string[][];
};

function Me({ links }: Props) {
  return (
    <>
      <Header
        children={
          <ButtonsList
            labels={links.slice(0, 3)}
            style="style-three"
            hover_style="style-four"
          ></ButtonsList>
        }
        scrolled={true}
      ></Header>
      <SectionTitle text={"About Me"}></SectionTitle>
      <SectionContent
        contentJsonUrl={"/section-contents/about-me.json"}
      ></SectionContent>
      <Footer></Footer>
    </>
  );
}

export default Me;
