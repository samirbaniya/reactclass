import { useState } from "react";

// eslint-disable-next-line react/prop-types
function DeleteProduct({ id }) {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_BASE_URL;

  async function deleteProduct(id) {
    try {
      const data = await fetch(apiUrl + "/products/" + id, {
        method: "DELETE",
      });
      if (!data.ok) {
        throw new Error("Error while deleting");
      }
      const finaldata = await data.json();
      console.log(finaldata);
    } catch (error) {
      setError(error);
    }
  }

  const handleDelete = (id) => {
    // Ask for confirmation before proceeding with the deletion
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      deleteProduct(id);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(id);
          console.log(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteProduct;
