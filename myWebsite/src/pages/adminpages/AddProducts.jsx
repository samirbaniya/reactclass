import { addProduct } from "@/api/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate: addProductsMutate, isPending } = useMutation({
    mutationFn: addProduct,
    onError: (err) => {
      console.log(err);
      alert("Failed to add products!!!");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/admin/products");
      alert("Product added successfully");
    },
  });

  const onSubmit = (data) => {
    const ProductsData = {
      title: data.title,
      price: data.price,
      image: data.image,
      description: data.description,
      category: data.category,
    };
    addProductsMutate(ProductsData);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen py-10 bg-gradient-to-br dark:from-slate-800 from-blue-50 to-blue-200">
      <form
        className="w-full max-w-2xl p-8 rounded-3xl dark:bg-slate-600 bg-white shadow-lg border border-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-semibold text-center dark:text-white text-blue-700 mb-6">
          Add Product
        </h1>

        {/* Title */}
        <div className="flex items-center gap-2 mb-5">
          <label
            htmlFor="title"
            className="text-lg font-medium text-gray-700 dark:text-white w-40"
          >
            Title:
          </label>
          <input
            id="title"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
            {...register("title", {
              required: { message: "Title is required", value: true },
            })}
          />
          {errors.title && (
            <span className="text-sm text-red-600 block">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-5">
          <label
            htmlFor="price"
            className="text-lg font-medium text-gray-700 dark:text-white w-40"
          >
            Price:
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
            {...register("price", {
              required: { message: "Price is required", value: true },
              min: {
                value: 0,
                message: "Price must be greater than or equal to 0",
              },
              max: { value: 9999.99, message: "Price must not exceed 9999.99" },
            })}
          />
          {errors.price && (
            <span className="text-sm text-red-600 block">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Image URL */}
        <div className="flex items-center gap-2 mb-5">
          <label
            htmlFor="image"
            className="text-lg font-medium text-gray-700 dark:text-white w-40"
          >
            Image:
          </label>
          <input
            id="image"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
            {...register("image", {
              required: { message: "Image URL is required", value: true },
            })}
          />
          {errors.image && (
            <span className="text-sm text-red-600 block">
              {errors.image.message}
            </span>
          )}
        </div>

        {/* Description */}
        <div className="flex items-center gap-2 mb-5">
          <label
            htmlFor="description"
            className="text-lg font-medium text-gray-700 dark:text-white w-40"
          >
            Description:
          </label>
          <textarea
            id="description"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
            rows="4"
            {...register("description", {
              required: { message: "Description is required", value: true },
            })}
          />
          {errors.description && (
            <span className="text-sm text-red-600 block">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mb-5">
          <label
            htmlFor="category"
            className="text-lg font-medium text-gray-700 dark:text-white w-40"
          >
            Category:
          </label>
          <input
            id="category"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3"
            {...register("category", {
              required: { message: "Category is required", value: true },
            })}
          />
          {errors.category && (
            <span className="text-sm text-red-600 block">
              {errors.category.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 text-white dark:bg-gray-800 dark:hover:bg-gray-900 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg shadow-md transition duration-300 disabled:bg-blue-300"
        >
          {isPending ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
