import AllCategories from "./AllCategories";
import AllProducts from "./AllProducts";
import LimitedProduct from "./LimitedProduct";
import SingleProduct from "./SingleProduct";
import SortedinDesc from "./SortedinDesc";
import SpecificCategory from "./SpecificCategory";

function Product() {
  return (
    <div>
      <AllProducts />
      <SingleProduct />
      <LimitedProduct />
      <SortedinDesc />
      <AllCategories />
      <SpecificCategory />
    </div>
  );
}

export default Product;
