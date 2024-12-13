import { useQuery } from "@tanstack/react-query";
import {
  getAllCategory,
  getAllProduct,
  getSingleCategory,
} from "../api/product";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [selectedCategory, setselectedCategory] = useState("all");
  const {
    data: productData,
    error,
    isLoading,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["product", selectedCategory],
    queryFn: () =>
      selectedCategory === "all"
        ? getAllProduct()
        : getSingleCategory(selectedCategory),
    retry: 4,
  });

  const { data: allCategoryData, isLoading: allCategoryLoading } = useQuery({
    queryKey: ["allCategory"],
    queryFn: getAllCategory,
    retry: 3,
  });

  const handleCategory = (category) => {
    setselectedCategory(category);
  };

  if (isLoading || isPending || allCategoryLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  console.log("Product Data:", productData);

  // console.log(productData);
  // console.log(error);

  const products = productData?.map((product) => (
    <div
      onClick={() => Navigate("/products/" + product.id)}
      className="flex flex-col items-center border border-slate-200 rounded-sm p-2 m-3 h-fit w-48"
      key={product.id}
    >
      {product.id && (
        <>
          <div className="">
            <img
              className="w-30 h-40"
              src={product.image}
              alt={product.title}
            />
          </div>
          <h2 className="truncate w-full">{product.title}</h2>
          <h3 className="">From ${product.price}</h3>
        </>
      )}
    </div>
  ));

  return (
    <div className="pb-10">
      <div className="bg-white h-fit p-5 m-2 flex gap-6 justify-center ">
        <div onClick={() => handleCategory("all")} className="cursor-pointer">
          All
        </div>
        {allCategoryData?.map((categories, index) => (
          <div
            key={index}
            onClick={() => handleCategory(categories)}
            className="cursor-pointer"
          >
            {categories.toUpperCase()}
          </div>
        ))}
      </div>
      <div className=" m-2 flex">
        <div className="bg-white flex  overflow-x-auto w-[80vw] mr-3 scrollbar-width">
          {products}
        </div>
        <div className="border border-black h-80">
          <img
            className="w-full h-full object-contain"
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
