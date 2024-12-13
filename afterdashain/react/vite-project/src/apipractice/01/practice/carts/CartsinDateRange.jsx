import { useState } from "react";

function CartsinDateRange() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(
        apiUrl + "/carts?startdate=2019-12-10&enddate=2020-10-10"
      );
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const products = data.map((cart) => (
    <div style={{ border: "1px solid black", margin: "10px" }} key={cart.id}>
      <p>{cart.id}</p>
      <p>{cart.date}</p>
      <div>
        {cart.products.map((product) => (
          <div
            style={{ border: "1px solid black", margin: "10px" }}
            key={product.productId}
          >
            Product Id:<p>{product.productId}</p>
            Product Quantity<p>{product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {products}
      <button onClick={fetchProducts}>Carts in date range</button>
    </>
  );
}

export default CartsinDateRange;