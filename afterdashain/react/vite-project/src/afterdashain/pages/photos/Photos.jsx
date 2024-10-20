import { useState } from "react";
import "../dog/Dog.css";

function Photos() {
  const [photo, setPhoto] = useState([]);

  async function fetchphotos() {
    try {
      const rawData = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await rawData.json();
      setPhoto(data);
    } catch (error) {
      console.error(error);
    }
  }
  const photos = photo.slice(0, 4).map((item) => (
    <div key={item.id}>
      <img className="image" src={item.url} alt="photos" />
      <br />
      {item.title}
    </div>
  ));
  return (
    <div className="outerDiv">
      <div
        className="innerDiv"
        style={{
          width: "auto",
          minWidth: "270px",
          padding: "30px",
          gap: "10px",
        }}
      >
        {photos}
        <br />
        <button className="button" onClick={fetchphotos}>
          Fetch Photos
        </button>
      </div>
    </div>
  );
}

export default Photos;
