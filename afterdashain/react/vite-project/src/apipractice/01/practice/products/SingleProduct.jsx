import { useState } from "react";

function SingleProduct() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products/1");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }

  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <div
        style={{ border: "1px solid black", margin: "10px", minHeight: "15px" }}
      >
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
      <button onClick={fetchProducts}>Single Products</button>
    </>
  );
}

export default SingleProduct;
