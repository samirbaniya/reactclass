import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useThemeContext } from "../Context/useThemeContext";
import { useAuthContext } from "../Context/useAuthContext";

function Navbar() {
  const { isloggedin, logout } = useAuthContext();

  const { setTheme, dark, light, purple, red, theme, defaulttheme } =
    useThemeContext();

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;

    if (selectedTheme === "dark") {
      setTheme(dark);
      localStorage.setItem("theme", JSON.stringify(dark));
    } else if (selectedTheme === "light") {
      setTheme(light);

      localStorage.setItem("theme", JSON.stringify(light));
    } else if (selectedTheme === "purple") {
      setTheme(purple);

      localStorage.setItem("theme", JSON.stringify(purple));
    } else if (selectedTheme === "red") {
      setTheme(red);

      localStorage.setItem("theme", JSON.stringify(red));
    } else {
      setTheme(defaulttheme);
      localStorage.setItem("theme", JSON.stringify(defaulttheme));
    }
  };
  return (
    <div className="navapi" style={theme}>
      <ul>
        <li>
          <select onChange={handleThemeChange}>
            <option value="">Select theme</option>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="purple">purple</option>
            <option value="red">red</option>
          </select>
        </li>
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
        {!isloggedin ? (
          <NavLink to={"/login"}>
            <li>Login</li>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>
            <li onClick={logout}>Logout</li>
          </NavLink>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
