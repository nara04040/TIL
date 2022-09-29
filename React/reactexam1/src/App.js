import React from "react";
import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initalValue: 5,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
