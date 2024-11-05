import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categorylist, setCategoryList] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { id } = useParams();
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/products/" + id);
      const finaldata = await data.json();
      setTitle(finaldata.title);
      setPrice(finaldata.price);
      setImage(finaldata.image);
      setDescription(finaldata.description);
      setCategory(finaldata.category);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }

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

  useEffect(() => {
    fetchProducts();
    fetchCategoryList();
  }, []);

  async function onSubmit() {
    const addProd = {
      title,
      price,
      image,
      description,
      category,
    };

    try {
      const rawData = await fetch(apiUrl + "/products/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Added header
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(addProd),
      });
      if (!rawData.ok) {
        throw new Error(" Failed to edit product!!!");
      }
      const response = await rawData.json();
      localStorage.setItem("token", response.token);
      alert("product edited successfully");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("Failed to edit products!!!");
    }
  }

  //   console.log(category);
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            borderRadius: "10px",
            padding: "50px",
            backgroundColor: "#c4c4d9",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <label>Image: </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />

          <label>Category: </label>
          <select
            style={{ textAlign: "center" }}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value={""}>Select category</option>
            {categorylist.map((item, index) => (
              <option value={item} key={index}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
          <br />
          <br />

          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
