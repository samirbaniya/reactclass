import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const products = data.map((product) => (
    <div
      onClick={() => navigate("/products/" + product.id)}
      className="product-card"
      key={product.id}
    >
      {product.id && (
        <>
          <div className="image-div">
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              {product.category}
            </h3>
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
          </div>
          <h2 className="product-name">{product.title}</h2>
          <h3 className="product-price">Price: ${product.price}</h3>
          <h3>
            Ratings: {product.rating.rate} {`(${product.rating.count})`}
          </h3>
        </>
      )}
    </div>
  ));
  return (
    <>
      <div>{error}</div>
      <div className="product-container">{products}</div>
    </>
  );
}

export default AllProducts;
