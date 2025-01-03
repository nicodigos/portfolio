import ButtonsList from "../ButtonsList";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Video from "../Video/Video";
import "./Dashboard.css";
// import Chart from "./Chart/Index";

type Props = { links: string[][] };

function Dashboard({ links }: Props) {
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
      {/* <Chart></Chart> */}
      <div className="dashboard-p inria-sans-regular">
        <p>
          This application is optimized for desktop use, however, it seems you
          are trying to access it from a mobile device. Therefore, I'd prefer to
          show you a demo of the application in the following video.
        </p>
      </div>
      <Video></Video>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
