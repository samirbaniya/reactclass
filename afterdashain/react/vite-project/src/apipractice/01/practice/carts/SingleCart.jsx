import { useState } from "react";

function SingleCart() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState({ products: [] });
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/carts/5");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }

  const cartt = data.products.map((product) => (
    <div
      style={{ border: "1px solid black", margin: "10px" }}
      key={product.productId}
    >
      Product Id:<p>{product.productId}</p>
      Product Quantity<p>{product.quantity}</p>
    </div>
  ));

  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <div
        style={{ border: "1px solid black", margin: "10px", minHeight: "15px" }}
      >
        <p>{data.id}</p>
        <p>{data.date}</p>
        <div>{cartt}</div>
      </div>
      <button onClick={fetchProducts}>Single Cart</button>
    </>
  );
}

export default SingleCart;
