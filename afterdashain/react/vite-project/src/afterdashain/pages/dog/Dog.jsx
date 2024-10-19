import { useState } from "react";
import "./Dog.css";

function Dog() {
  const [dogs, setDogs] = useState({});

  async function fetchdogs() {
    try {
      const rawData = await fetch(" https://dog.ceo/api/breeds/image/random");
      const data = await rawData.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="outerDiv">
      <div className="innerDiv">
        <img className="image" src={dogs.message} alt="dogs" />
        <br />
        <button className="button" onClick={fetchdogs}>
          Fetch dogs
        </button>
      </div>
    </div>
  );
}

export default Dog;
