import Carousel1 from "@/mycomponents/Carousel1";
import { useQuery } from "@tanstack/react-query";
import {
  getAllCategory,
  getAllProduct,
  getSingleCategory,
} from "../api/product";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import slides from "@/assets/Slides";

function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setselectedCategory] = useState("all");
  const {
    data: productData,
    error,
    isLoading,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
    retry: 4,
  });
  const {
    data: SingleCategory,
    singleCategoryisLoading,
    singleCategoryisError,
    singleCategoryisPending,
  } = useQuery({
    queryKey: ["singlecategory", selectedCategory],
    queryFn: () => getSingleCategory(selectedCategory),
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

  if (
    isLoading ||
    isPending ||
    allCategoryLoading ||
    singleCategoryisLoading ||
    singleCategoryisPending
  ) {
    return <div>Loading...</div>;
  }
  if (isError || singleCategoryisError) {
    return <div>Error...</div>;
  }
  // console.log("Product Data:", productData);

  // console.log(productData);
  // console.log(error);

  const products = (
    selectedCategory === "all" ? productData : SingleCategory
  )?.map((product) => (
    <div
      onClick={() => navigate("/products/" + product.id)}
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
    <div className="pb-10 px-2">
      <div className="dark:bg-gray-900 bg-white h-fit p-5 mx-2 my-3 flex gap-6 justify-center ">
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
      <div className="dark:bg-gray-900 bg-white h-fit pb-5 mx-2 my-3">
        <div>
          <Carousel1
            slides={slides}
            autoSlide={true}
            autoSlideInterval={3000}
          />
        </div>
      </div>
      {products && (
        <div className=" mx-2 my-3 flex">
          <div
            className={`dark:bg-gray-900 bg-white flex flex-col mr-3 ${
              products?.length < 5 ? "items-center" : ""
            }`}
          >
            <h1 className="p-3 font-bold text-lg">
              {selectedCategory.toUpperCase()} PRODUCTS
            </h1>
            <div
              className={`flex overflow-x-auto w-[80vw] ${
                products?.length < 5 ? "justify-center" : ""
              }`}
            >
              {products?.length > 0 ? (
                products
              ) : (
                <div className="w-full flex justify-center">
                  {selectedCategory} products loading...
                </div>
              )}
            </div>
          </div>
          <div className="h-80">
            <img
              className="w-full h-full object-contain"
              src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/ec9bba198c534edb.jpg?q=20"
              alt=""
            />
          </div>
        </div>
      )}

      <div className=" mx-2 my-3 flex flex-row flex-wrap">
        {allCategoryData
          ?.filter((category) => category !== selectedCategory)
          ?.map((category, index) => (
            <div
              key={index}
              className={`dark:bg-gray-900 bg-white flex flex-col mr-3 w-[32%] mb-3${
                products?.length < 5 ? "items-center" : ""
              }`}
            >
              <h1 className="p-3 font-bold text-lg">
                {category.toUpperCase()} PRODUCTS
              </h1>
              <div
                className={`flex flex-wrap w-full h-full ${
                  products?.length < 5 ? "justify-center" : ""
                }`}
              >
                {productData
                  ?.filter((product) => product.category === category)
                  ?.slice(0, 4)
                  .map((product) => (
                    <div
                      onClick={() => navigate("/products/" + product.id)}
                      className="flex flex-col items-center border border-slate-200 rounded-sm p-2 m-3 h-fit w-44"
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
                  ))}
              </div>
            </div>
          ))}
        <div>
          <img src="https://picsum.photos/850/550" alt="advertise here" />
        </div>
      </div>
    </div>
  );
}

export default Home;
