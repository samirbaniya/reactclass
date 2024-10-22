import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    id: null,
    title: "",
    price: "",
    description: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const { id } = useParams();
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products/" + id);
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
  return (
    <>
      {data.id && (
        <div className="single-product-container">
          <div style={{ color: "red" }}>{error}</div>
          <div className="single-product-div">
            <img
              className="single-product-img"
              src={data.image}
              alt={data.title}
            />
            <div className="single-product-description">
              <h2 className="product-name">{data.title}</h2>
              <hr />
              <h3 className="product-price">Price: ${data.price}</h3>
              <hr />
              <h3>
                Ratings: {data.rating?.rate} {`(${data.rating?.count})`}
              </h3>
              <hr />
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
