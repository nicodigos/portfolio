import Header from "./components/Header";
import ButtonsList from "./components/ButtonsList";

type Props = {
  links: string[][];
};

function Experience({ links }: Props) {
  return (
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
  );
}

export default Experience;
