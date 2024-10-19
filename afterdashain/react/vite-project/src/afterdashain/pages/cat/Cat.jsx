import { useState } from "react";
import "../dog/Dog.css";

function Cat() {
  const [cat, setCat] = useState([]);

  async function fetchCats() {
    try {
      const rawData = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await rawData.json();
      setCat(data);
    } catch (error) {
      console.error(error);
    }
  }
  const cats = cat.map((item) => (
    <div key={item.id}>
      <img className="image" src={item.url} alt="cats" />
    </div>
  ));
  return (
    <div className="outerDiv">
      <div className="innerDiv">
        {cats}
        <br />
        <button className="button" onClick={fetchCats}>
          Fetch cats
        </button>
      </div>
    </div>
  );
}

export default Cat;
