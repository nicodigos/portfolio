import ButtonsList from "../ButtonsList";
import Header from "../Header";

type Props = { links: string[][] };

function Dashboard({ links }: Props) {
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

export default Dashboard;
