import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to={"/home"}>
          <li>Home</li>
        </NavLink>

        <NavLink to={"/about"}>
          <li>About</li>
        </NavLink>

        <NavLink to={"/contact"}>
          <li>Contact</li>
        </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;
