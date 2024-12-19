/* eslint-disable react/prop-types */
import { deleteProduct } from "@/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteProduct(props) {
  const { id } = props;
  const queryClient = useQueryClient();
  const { mutate: deleteProductMutation, isLoading } = useMutation({
    mutationFn: () => deleteProduct(id),
    onError: (err) => {
      console.log(err);
      alert("Failed to Delete Product!!!");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProductMutation();
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteProduct;
