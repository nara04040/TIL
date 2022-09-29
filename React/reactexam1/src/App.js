import React from "react";
import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
function App() {
  let name = "nara";
  const style = {
    App: {
      backgroundColor: "yellow",
    },
  };
  const number = 5;
  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <h2>안녕 리액트 {1 + 2}</h2>
      <b id="bold-text">
        {number} 는 {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
