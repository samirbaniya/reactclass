import { getSingleProduct } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ProductDescription() {
  const { id } = useParams();

  // Fetching product data
  const {
    data: SingleProduct,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => getSingleProduct(id),
    retry: 4,
  });

  // Loading state
  if (isLoading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  // Error state
  if (isError) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <>
      {SingleProduct?.id && (
        <div className="flex justify-center py-10">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Product Image */}
            <div className="flex justify-center md:w-1/2">
              <img
                className="w-full max-w-md rounded-lg shadow-lg"
                src={SingleProduct.image}
                alt={SingleProduct.title}
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {SingleProduct.title}
              </h2>
              <hr className="border-gray-300" />
              <h3 className="text-xl font-semibold text-gray-700">
                Price: ${SingleProduct.price}
              </h3>
              <hr className="border-gray-300" />
              <h3 className="text-lg text-gray-600">
                Ratings: {SingleProduct.rating?.rate}{" "}
                {`(${SingleProduct.rating?.count})`}
              </h3>
              <hr className="border-gray-300" />
              <p className="text-gray-700">{SingleProduct.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDescription;
