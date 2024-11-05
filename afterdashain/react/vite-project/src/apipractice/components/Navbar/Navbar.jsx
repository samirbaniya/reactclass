import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const token = localStorage.getItem("token");
  function logout() {
    localStorage.clear("token");
    alert("Logged out");
    window.location.reload();
  }
  return (
    <div className="navapi">
      <ul>
        <NavLink to={"/admin/products"}>
          <li>Add Products</li>
        </NavLink>
        <NavLink to={"/Products"}>
          <li>Products</li>
        </NavLink>
        <NavLink to={"/Carts"}>
          <li>Carts</li>
        </NavLink>
        <NavLink to={"/Users"}>
          <li>Users</li>
        </NavLink>
        {!token ? (
          <NavLink to={"/login"}>
            <li>Login</li>
          </NavLink>
        ) : (
          <NavLink to={"/"}>
            <li onClick={logout}>Logout</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
