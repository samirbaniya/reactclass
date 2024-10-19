import { useState } from "react";

function Jokes() {
  const [jokes, setJokes] = useState({});
  async function fetchJokes() {
    try {
      const rawData = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await rawData.json();
      setJokes(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="outerDiv">
      <div
        className="innerDiv"
        style={{ width: "auto", minWidth: "270px", padding: "10px" }}
      >
        {jokes.setup}
        <br />
        {jokes.punchline}
        <br />
        <button className="button" onClick={fetchJokes}>
          Fetch jokes
        </button>
      </div>
    </div>
  );
}

export default Jokes;
