import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import Header from "./Header";
import Result from "./Result";
import request from "./request";

function App() {
  const [selectOption, SetselectOption] = useState(request.fetchTrending);
  return (
    <div className="App">
      <Header />
      <Nav SetselectOption={SetselectOption} />
      <Result selectOption={selectOption} />
    </div>
  ); 
}

export default App;
