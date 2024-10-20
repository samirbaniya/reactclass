import { useState } from "react";

function SpecificCategory() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products/category/jewelery");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const products = data.map((category) => (
    <div
      style={{ border: "1px solid black", margin: "10px" }}
      key={category.id}
    >
      <p>{category.category}</p>
      <p>{category.description}</p>
    </div>
  ));
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {products}
      <button onClick={fetchProducts}>Specific Category</button>
    </>
  );
}

export default SpecificCategory;
