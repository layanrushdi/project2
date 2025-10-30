// App.js
import React from "react";
import "./App.css";
import Addition from "./Addition";

function App() {
  return (
    <>
      <Addition numberOne={1} numberTwo={1} />
      <Addition numberOne={10} numberTwo={12} />
      <Addition numberOne={3} numberTwo={0.14159} />
    </>
  );
}

export default App;
