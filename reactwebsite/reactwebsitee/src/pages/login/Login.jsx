import { NavLink } from "react-router-dom";
import "./Login.css";

function Login() {
  function loginGranted() {
    localStorage.setItem("token", "loggedin");
    // window.location.reload();
  }
  return (
    <div className="center-contents login-page">
      <div className="inner-div">
        <div className="login-heading">Login</div>
        <input
          type="text"
          name="user_name"
          placeholder="Username"
          className="input-field"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
        />
        <br />
        <NavLink to={"/home"}>
          <button
            onClick={loginGranted}
            type="submit"
            name="login"
            className="logins-btn"
          >
            LOGIN
          </button>
        </NavLink>

        <NavLink to={"/signup"}>
          <button type="submit" name="signup" className="signup-btn">
            SIGN UP
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
