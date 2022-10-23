import "./App.css";
import "./zero.css";
import phototypeImgOne from "./pic/1.png";
import phototypeImgTwo from "./pic/2.png";
import phototypeImgThree from "./pic/3.jpg";
import phototypeImgfour from "./pic/4.jpg";

function Design() {
  return (
    <div className="design">
      <img src={phototypeImgOne} alt="pic"></img>
      <img src={phototypeImgTwo} alt="pictwo"></img>
      <img src={phototypeImgThree} alt="picthree"></img>
      <img src={phototypeImgfour} alt="picfour"></img>
    </div>
  );
}

function First() {
  return (
    <div className="menu">
      <div className="menu-background">
        <div className="menu-logo">
          <p>logo</p>
        </div>
        <div className="menu-selection">
          <ul>
            <li>
              <a href="/">work</a>
              <a href="/">product</a>
              <a href="/">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="App">
        {/* Menu */}
        <main className="Main">
          <Design /> {/* Prototype one */}
          {/* Main */}
        </main>

        <footer className="Feet">
          <div>{/* Something?? */}</div>
        </footer>
      </div>
    </>
  );
}

export default App;
