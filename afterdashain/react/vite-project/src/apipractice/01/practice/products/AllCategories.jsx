import { useState } from "react";

function AllCategories() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products/categories");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const categories = data.map((category, index) => (
    <div style={{ border: "1px solid black", margin: "10px" }} key={index}>
      <p>{category}</p>
    </div>
  ));
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {categories}
      <button onClick={fetchProducts}>All Categories</button>
    </>
  );
}

export default AllCategories;
