import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import ErrorPage from "../../../components/ErrorPage";

function AllProducts() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categorylist, setCategoryList] = useState([]);
  const [category, setCategory] = useState();
  const [limit, setLimit] = useState(20);

  const navigate = useNavigate();
  async function fetchCategoryList() {
    try {
      const data = await fetch(apiUrl + "/products/categories");
      if (!data.ok) {
        throw new Error("Error while fetching category");
      }
      const finaldata = await data.json();
      setCategoryList(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }

  async function fetchProducts(params = "") {
    try {
      setLoading(true);
      const data = await fetch(apiUrl + "/products" + params);
      if (!data.ok) {
        throw new Error("Error while fetching products");
      }
      const finaldata = await data.json();
      setData(finaldata);
      setLimit(finaldata.length);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
    fetchCategoryList();
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
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />
          </div>
          <h2 className="product-name">{product.title}</h2>
          <h3 className="product-price">Price: ${product.price}</h3>
          <h3>Category: {product.category}</h3>
          <h3>
            Ratings: {product.rating.rate} {`(${product.rating.count})`}
          </h3>
        </>
      )}
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
      <div>{error}</div>

      <div>
        <div className="filters">
          <select
            value={category}
            onChange={(e) => {
              if (e.target.value === "") {
                fetchProducts();
              } else {
                fetchProducts(`/category/${e.target.value}`);
              }
              setCategory(e.target.value);
            }}
          >
            <option value={""}>All</option>
            {categorylist.map((item, index) => (
              <option value={item} key={index}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
          <div>
            Sort:
            <button onClick={() => fetchProducts("?sort=asc")}>
              Ascending
            </button>
            <button onClick={() => fetchProducts("?sort=desc")}>
              Descending
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setLimit((limit) => {
                  fetchProducts(`?limit=${limit - 1}`);
                  return limit === 0 ? 0 : limit - 1;
                });
              }}
            >
              -
            </button>
            {"  "}
            {limit}{" "}
            <button
              onClick={() => {
                setLimit((limit) => {
                  fetchProducts(`?limit=${limit + 1}`);
                  return limit === 0 ? 0 : limit + 1;
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="product-container">{products}</div>
      </div>
    </>
  );
}

export default AllProducts;
