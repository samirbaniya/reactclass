import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../api/product";

function Products() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
    retry: 3,
  });
  // console.log(data?.data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <div className="pb-10">
      <div className="bg-white h-fit p-5 m-2 flex gap-6 justify-center "></div>
      <div className="bg-white h-12 m-2"></div>
    </div>
  );
}

export default Products;
