import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="banner inria-sans-regular">
        <h1>Nicolas Peralta</h1>
        <p className="inria-sans-light">Data Analyst, Fullstack Developer</p>
        <div className="dashboard-buttons">
          <button>Power BI</button>
          <button>D3.js</button>
        </div>
      </div>
    </>
  );
}

export default Banner;
