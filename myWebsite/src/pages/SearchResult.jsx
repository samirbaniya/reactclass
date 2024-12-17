/* eslint-disable react/no-unescaped-entities */
import { getAllProduct } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

function SearchResult() {
  const { search } = useParams();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products...</div>;
  }

  const filteredProducts = productData?.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      (product.price >= Number(search) - 10 &&
        product.price <= Number(search) + 10)
  );
  //   console.log(filteredProducts);
  return (
    <div className="pb-10 px-2">
      <div className="dark:bg-gray-900 bg-white h-fit p-5 mx-2 my-3 text-center">
        <h1 className="text-2xl font-bold">Search Results for "{search}"</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-2 my-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate("/products/" + product.id)}
              className="flex flex-col items-center border border-slate-200 rounded-sm p-2 m-3 h-fit w-48 cursor-pointer"
            >
              <img
                className="w-30 h-40 transform transition-transform duration-200 hover:scale-105"
                src={product.image}
                alt={product.title}
              />
              <h2 className="truncate w-full">{product.title}</h2>
              <h3 className="text-blue-600 font-semibold">
                From ${product.price}
              </h3>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">
            No products found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
