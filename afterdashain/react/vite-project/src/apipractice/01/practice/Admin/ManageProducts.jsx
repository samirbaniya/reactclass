import { useEffect } from "react";
import "./Admin.css";
import { useState } from "react";
import Loader from "../../../components/Loader";
import ErrorPage from "../../../components/ErrorPage";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import { NavLink } from "react-router-dom";
function ManageProducts() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isAdd, setIsAdd] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await fetch(apiUrl + "/products");
      if (!data.ok) {
        throw new Error("Error while fetching products");
      }
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  function addProducts() {
    setIsAdd(true);
  }
  const products = data.map((product) => (
    <tbody key={product.id}>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          <img width={"50px"} src={product.image} alt={product.title} />
        </td>
        <td>
          <div
            style={{
              display: "flex",
              gap: "1px",
            }}
          >
            <NavLink to={`/edit/${product.id}`}>
              <button>Edit</button>
            </NavLink>
            <DeleteProduct id={product.id} />
          </div>
        </td>
      </tr>
    </tbody>
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
    <div className="manage-products">
      <div>
        <button onClick={addProducts} style={{ margin: "10px 10px 10px 80vw" }}>
          Add new Product
        </button>
      </div>
      {isAdd && (
        <div>
          <AddProduct />
        </div>
      )}
      <div>
        <table className="product-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          {products}
        </table>
      </div>
    </div>
  );
}

export default ManageProducts;
