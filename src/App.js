import "./App.css";
import "./zero.css";

function First() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <header>
          {/* Menu */}
          <First />
        </header>
        <main className="Main">
          <div>{/* Main grid */}</div>
        </main>
        <footer className="Feet">
          <div>{/* Something?? */}</div>
        </footer>
      </div>
    </>
  );
}

export default App;
