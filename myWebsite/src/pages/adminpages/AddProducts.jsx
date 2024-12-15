import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addProduct, getAllCategory } from "@/api/product";

function AddProducts() {

  const navigate = useNavigate();
  
  // State for product form
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // React Query for fetching categories
  const {
    data: categoryList,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery(["categories"], getAllCategory);

  // React Query for adding product
  const { mutate: createProduct, isLoading: isCreatingProduct } = useMutation(
    addProduct,
    {
      onSuccess: () => {
        alert("Product added successfully");
        navigate("/products"); // Redirect to products list or dashboard
      },
      onError: () => {
        alert("Failed to add product");
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title,
      price,
      image,
      description,
      category,
    };

    createProduct(productData); // Call mutation to add the product
  };

  if (categoryLoading) return <div>Loading categories...</div>;
  if (categoryError) return <div>Error fetching categories</div>;

  return (
    <div className="flex justify-center mt-12">
      <form
        onSubmit={onSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Product
        </h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categoryList?.map((cat, index) => (
              <option key={index} value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isCreatingProduct}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isCreatingProduct ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
