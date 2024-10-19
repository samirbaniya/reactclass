import { useState } from "react";

function Practice() {
  const [data, setData] = useState([]);
  const [dogs, setDogs] = useState({});
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
  async function fetchData() {
    try {
      const rawData = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await rawData.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchdogs() {
    try {
      const rawData = await fetch(" https://dog.ceo/api/breeds/image/random");
      const data = await rawData.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  }
  const facts = data.map((item) => (
    <ul key={item.id}>
      {/* <span>{item.type}</span> */}
      <li>
        {item.id}
        <img src={item.url} alt="dogs" />
      </li>
    </ul>
  ));
  return (
    <div>
      <button onClick={fetchData}>Fetch cats</button>
      <button onClick={fetchdogs}>Fetch dogs</button>
      <button onClick={fetchJokes}>Fetch jokes</button>
      {facts}
      <img src={dogs.message} alt="dogs" />
      <br />
      {jokes.setup}
      <br />
      {jokes.punchline}
    </div>
  );
}

export default Practice;
