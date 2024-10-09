import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Me from "./Me";
import Experience from "./Experience";
import Education from "./Education";
import "./App.css";

const App = () => {
  let labels = [
    ["About Me", "/me"],
    ["Experience", "/experience"],
    ["Education", "/education"],
    ["Power BI", "/bi"],
    ["D3.js", "/d3js"],
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home links={labels} />} />
        <Route path="/me" element={<Me links={labels} />} />
        <Route path="/experience" element={<Experience links={labels} />} />
        <Route path="/education" element={<Education links={labels} />} />
      </Routes>
    </Router>
  );
};

export default App;
