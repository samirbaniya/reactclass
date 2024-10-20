import { useState } from "react";

function UserCart() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/carts/user/2");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }

  const ucarts = data.map((cart) => (
    <div style={{ border: "1px solid black", margin: "10px" }} key={cart.id}>
      <p>id: {cart.id}</p>
      <p>UserId:{cart.userId}</p>
      <p>Date:{cart.date}</p>
      <div>
        {cart.products.map((product) => (
          <div
            style={{ border: "1px solid black", margin: "10px" }}
            key={product.productId}
          >
            <p>Product Id:{product.productId}</p>
            <p>Product Quantity{product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <div>
        <p>{ucarts}</p>
      </div>
      <button onClick={fetchProducts}>User Cart</button>
    </>
  );
}

export default UserCart;
