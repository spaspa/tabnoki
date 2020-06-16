import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import promisify from "./utils/promisify";

function App() {
  const [tabs, setter] = useState([] as chrome.tabs.Tab[]);

  const query = promisify(chrome.tabs.query);
  query({ currentWindow: true }).then(setter);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <ul>
          {tabs.map((tab) => {
            return <li key={tab.id}>{tab.url}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
