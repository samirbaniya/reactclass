import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex py-3  bg-white justify-around">
      <NavLink to={"/"}>
        <img src="/images/flipcartLogo.svg" alt="Logo" />
      </NavLink>
      <div className="bg-[#f0f5ff] flex px-3 rounded-lg w-5/12">
        <button>
          <CiSearch />
        </button>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="bg-transparent w-full"
        />
      </div>
      <NavLink to={"/loginForm"} className="flex items-center">
        <button className="flex">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
            alt="icon"
          />
          Login
        </button>
      </NavLink>
      <div className="flex items-center">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
          alt="cart"
          className="h-6"
        />
        Cart
      </div>
      <div className="flex items-center">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
          alt="shopicon"
        />
        Become a Seller
      </div>
      <div className="flex items-center">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
          alt="threedots"
        />
      </div>
    </div>
  );
}

export default Navbar;
