import { useRef } from "react";
// import { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);
  const navigate = useNavigate();
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");

  const token = localStorage.getItem("token");
  // console.log(token);
  async function onSubmit() {
    const password = passwordRef.current?.value;
    const userName = userNameRef.current?.value;
    const loginJson = {
      username: userName,
      password: password,
    };

    if (userName === "") {
      alert("Username can't be empty.");
    } else if (password === "") {
      alert("Password can't be empty.");
    }

    try {
      const rawData = await fetch(apiUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added header
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(loginJson),
      });
      if (!rawData.ok) {
        throw new Error("Login Failed!!!");
      }
      const response = await rawData.json();
      localStorage.setItem("token", response.token);
      alert("logged in successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to Login!!!");
    }
  }
  return (
    <div className="center-contents login-page">
      <div className="inner-div">
        <div className="login-heading">Login</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="text"
            name="user_name"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
            ref={userNameRef}
            placeholder="Username"
            className="input-field"
          />
          <br />
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
            placeholder="Password"
            className="input-field"
          />
          <br />

          <button type="submit" name="login" className="logins-btn">
            LOGIN
          </button>

          <div className="without-login">
            <NavLink to={"/"}>
              <div>Continue without Loging</div>
            </NavLink>
          </div>

          {/* <button type="submit" name="signup" className="signup-btn">
          SIGN UP
        </button> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
