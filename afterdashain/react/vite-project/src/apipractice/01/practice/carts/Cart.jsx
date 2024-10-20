import AllCarts from "./AllCarts";
import CartsinDateRange from "./CartsinDateRange";
import LimitedCart from "./LimitedCart";
import SingleCart from "./SingleCart";
import SortedCarts from "./SortedCarts";
import UserCart from "./UserCart";

function Cart() {
  return (
    <div>
      <AllCarts />
      <SingleCart />
      <LimitedCart />
      <SortedCarts />
      <CartsinDateRange />
      <UserCart />
    </div>
  );
}

export default Cart;
