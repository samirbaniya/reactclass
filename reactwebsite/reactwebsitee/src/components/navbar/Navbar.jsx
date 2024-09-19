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
          <li>About Us</li>
        </NavLink>

        <NavLink to={"/explore"}>
          <li>Explore Pets</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li>Contact</li>
        </NavLink>
        <NavLink to={"/userProfile"}>
          <li>Profile</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
