import { useState } from "react";
import "../dog/Dog.css";

function Bird() {
  const [birds, setBirds] = useState({});

  async function fetchdogs() {
    try {
      const rawData = await fetch("https://some-random-api.com/animal/bird");
      const data = await rawData.json();
      setBirds(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="outerDiv" style={{ flexDirection: "column" }}>
      <div className="innerDiv">
        <img className="image" src={birds.image} alt="birds" />
        <br />
        <button className="button" onClick={fetchdogs}>
          Fetch birds
        </button>
      </div>
      {birds.fact}
    </div>
  );
}

export default Bird;
