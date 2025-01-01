import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Me from "./Me";
import Experience from "./Experience";
import Education from "./Education";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  let labels = [
    ["About Me", "/me"],
    ["Experience", "/experience"],
    ["Education", "/education"],
    ["Dashboard", "https://nicodigos-dashboard.streamlit.app/"],
  ];
  return (
    <Router basename="/react-portf">
      <Routes>
        <Route path="/" element={<Home links={labels} />} />
        <Route path="/me" element={<Me links={labels} />} />
        <Route path="/experience" element={<Experience links={labels} />} />
        <Route path="/education" element={<Education links={labels} />} />
        <Route
          path="/dash"
          element={<Dashboard links={labels}></Dashboard>}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
