import Header from "./components/Header";
import Banner from "./components/Banner";
import ButtonsList from "./components/ButtonsList";
import "./App.css";

function App() {
  return (
    <>
      <Header
        children={
          <ButtonsList
            labels={["About Me", "Experience", "Education"]}
          ></ButtonsList>
        }
      ></Header>
      <Banner
        children={<ButtonsList labels={["Power BI", "D3.js"]}></ButtonsList>}
      ></Banner>
    </>
  );
}

export default App;
