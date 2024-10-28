import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import ErrorPage from "../../../components/ErrorPage";

function UserCart() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  // Fetch user cart data
  async function fetchCart() {
    try {
      setLoading(true);
      setError(null); // Reset error state before fetching
      const response = await fetch(apiUrl + "/carts/user/2");
      const data = await response.json();
      await fetchProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  // Fetch product data
  async function fetchProducts(datafromcart) {
    try {
      setError(null); // Reset error state before fetching
      const response = await fetch(apiUrl + "/products/");
      const productData = await response.json();

      let filteredData = [];
      let total = 0;
      productData.forEach((element) => {
        datafromcart[0]?.products?.forEach((cartProd) => {
          if (cartProd.productId === element.id) {
            filteredData.push({ ...element, quantity: cartProd.quantity });
            total = total + cartProd.quantity * element.price;
          }
        });
      });
      setTotal(total);
      setProducts(filteredData);
    } catch (error) {
      console.log(error);
      setError("Error fetching products");
    }
  }

  // console.log(products);
  useEffect(() => {
    fetchCart();
  }, []);

  const ucarts = products.map((product) => (
    <div key={product.id}>
      <div className="cart-product-div">
        <div className="cart-img-div">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "50px" }}
          />
        </div>
        <div className="cart-product-description">
          <p className="cart-product-name">{product.title}</p>
          <p className="cart-product-category">{product.category}</p>
          <p className="cart-product-price">Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total Price: ${product.quantity * product.price}</p>
        </div>
      </div>
    </div>
  ));
  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {/* <div style={{ color: "red" }}>{error}</div> */}

      {products.length === 0 && !loading && !error ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-product-container">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ucarts}
          </div>
          <div className="order-summary">
            <p style={{ color: "green", fontWeight: "bold", fontSize: "25px" }}>
              Order Summary
            </p>
            <hr />
            <div className="cart-product-price">
              {products.map((prod, index) => (
                <div key={index}>
                  <div style={{ padding: "10px" }}>
                    {prod.title}
                    <p
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px",
                        width: "fit-content",
                        margin: "10px",
                        minWidth: "100px",
                      }}
                    >
                      {prod.quantity} items = ${prod.price * prod.quantity}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <p
              className="cart-product-price"
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "20px",
                padding: "10px",
              }}
            >
              Grand Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default UserCart;
