import { getAllProduct } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import Loading from "@/mycomponents/Loading";

function AllProducts() {
  const navigate = useNavigate();

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
    retry: 4,
  });

  const products = productData?.map((product) => (
    <tr
      key={product.id}
      className="border-b hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <td className="p-3 text-center">{product.id}</td>
      <td className="p-3 text-center">{product.title}</td>
      <td className="p-3 text-center">{product.category}</td>
      <td className="p-3 text-center">${product.price}</td>
      <td className="p-3 text-center">
        <img
          className="max-w-full max-h-16 mx-auto"
          src={product.image}
          alt={product.title}
        />
      </td>
      <td className="p-3 text-center">
        <div className="flex justify-center gap-2">
          <NavLink to={`/admin/editproduct/${product.id}`}>
            <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit
            </button>
          </NavLink>
          <DeleteProduct id={product.id} />
        </div>
      </td>
    </tr>
  ));

  if (isError) {
    return (
      <div className="text-red-500 text-center">Error fetching products...</div>
    );
  }
  if (isLoading) {
    return (
      <div className="text-gray-500 text-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="pb-6 px-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/admin/addproducts")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add New Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-3 border">Id</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;
