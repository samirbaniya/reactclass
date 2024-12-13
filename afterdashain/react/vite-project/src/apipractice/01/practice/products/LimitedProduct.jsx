import { useState } from "react";

function LimitedProduct() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products?limit=5");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const products = data.map((product) => (
    <div style={{ border: "1px solid black", margin: "10px" }} key={product.id}>
      <h2>{product.id}</h2>
      <p>{product.description}</p>
    </div>
  ));
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {products}
      <button onClick={fetchProducts}>Limited Products</button>
    </>
  );
}

export default LimitedProduct;