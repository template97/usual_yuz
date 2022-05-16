import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {"Welcome to Jackson's Page"}
        <Button size="medium">hello</Button>
      </header>
    </div>
  );
}

export default App;
