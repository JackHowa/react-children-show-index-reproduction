import "./styles.css";
import Container from "./Container";
import React from "react";
import ChildComponentElement from "./ChildComponentElement";
export default function App() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="App">
      <h1>Pick 0 or 1 to show children components at those indices</h1>
      <input
        type="number"
        defaultValue={0}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>index: {number}</p>
      <Container showIndexElement={number}>
        <ChildComponentElement text={"Show child component at index 0"} />
        <ChildComponentElement text={"Show child component at index 1"} />
      </Container>
    </div>
  );
}
