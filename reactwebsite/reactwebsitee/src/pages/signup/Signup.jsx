import { NavLink } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="inner-divs">
        <div className="signup-heading">Sign Up</div>

        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          className="input-fields"
        />
        <br />

        <label htmlFor="dob">DoB:</label>
        <input type="date" name="dob" className="input-fields" />
        <br />

        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" />
        <label htmlFor="female">Female</label>
        <br />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input-fields"
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-fields"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-fields"
        />
        <br />
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          className="input-fields"
        />
        <br />

        <NavLink to={"/login"}>
          <button type="submit" name="signup" className="signup-btn">
            Sign Up
          </button>
        </NavLink>

        <div className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
