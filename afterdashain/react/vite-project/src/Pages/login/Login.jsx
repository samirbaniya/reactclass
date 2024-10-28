import { useRef } from "react";
// import { useState } from "react";
import "./Login.css";

function Login() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");

  const token = localStorage.getItem("token");
  console.log(token);
  async function onSubmit() {
    const password = passwordRef.current?.value;
    const userName = userNameRef.current?.value;
    const loginJson = {
      username: userName,
      password: password,
    };
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
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="center-contents login-page">
      <div className="inner-div">
        <div className="login-heading">Login</div>
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

        <button
          onClick={onSubmit}
          type="submit"
          name="login"
          className="logins-btn"
        >
          LOGIN
        </button>

        <button type="submit" name="signup" className="signup-btn">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Login;
