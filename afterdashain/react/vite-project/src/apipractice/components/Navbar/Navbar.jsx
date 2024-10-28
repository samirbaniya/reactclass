import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navapi">
      <ul>
        <NavLink to={"/Products"}>
          <li>Products</li>
        </NavLink>
        <NavLink to={"/Carts"}>
          <li>Carts</li>
        </NavLink>
        <NavLink to={"/Users"}>
          <li>Users</li>
        </NavLink>
        <NavLink to={"/login"}>
          <li>Login</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
