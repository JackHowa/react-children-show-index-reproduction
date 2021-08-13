import "./styles.css";
import Container from "./Container";
import React from "react";
import ChildComponentElement from "./ChildComponentElement";
export default function App() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="App">
      <h1>Pick 0 or 1 to show children</h1>
      <input
        type="number"
        defaultValue={0}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{number}</p>

      <Container showIndexElement={number}>
        <ChildComponentElement text={"Show index 0"} />
        <ChildComponentElement text={"Show index 1"} />
      </Container>
    </div>
  );
}
