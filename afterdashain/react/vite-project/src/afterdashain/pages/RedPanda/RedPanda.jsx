import { useState } from "react";
import "../dog/Dog.css";

function RedPanda() {
  const [redpanda, setRedPanda] = useState({});

  async function fetchdogs() {
    try {
      const rawData = await fetch(
        "https://some-random-api.com/animal/red_panda"
      );
      const data = await rawData.json();
      setRedPanda(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="outerDiv" style={{ flexDirection: "column" }}>
      <div className="innerDiv">
        <img className="image" src={redpanda.image} alt="red panda" />
        <br />
        <button className="button" onClick={fetchdogs}>
          Fetch red panda
        </button>
      </div>
      {redpanda.fact}
    </div>
  );
}

export default RedPanda;
