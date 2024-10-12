import Header from "./components/Header";
import ButtonsList from "./components/ButtonsList";
import SectionTitle from "./components/SectionTitle";
import Footer from "./components/Footer/Footer";

type Props = {
  links: string[][];
};

function Education({ links }: Props) {
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
      <SectionTitle text={"Education"}></SectionTitle>
      <Footer></Footer>
    </>
  );
}

export default Education;
