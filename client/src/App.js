import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);
/*useEffect to fetch db*/
/*setting up a proxy in the top level of package json and update start script PORT 3000"*/
/*Or installing gem foreman and creating a Procfile.dev file for apis*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
