import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <div className="App">
        <Search />
        <Weather />
      </div>
      <div className="coder">
        <a
          href="https://github.com/MarinaFerencak/react-weather-application"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Marina Ferenčak
      </div>
    </div>
  );
}

export default App;
