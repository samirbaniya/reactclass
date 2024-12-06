import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className=" flex p-3 bg-white gap-16">
      <img src="/images/flipcartLogo.svg" alt="Logo" />

      <div className="bg-[#f0f5ff] flex px-3 rounded-lg w-1/2">
        <button>
          <CiSearch />
        </button>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="bg-transparent w-full"
        />
      </div>
      <button className="flex items-center">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
          alt="icon"
        />
        Login
      </button>
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
