import { useState } from "react";
import "../Styles/Login.css";
import { NavLink } from "react-router-dom";

export const Sign_Log_in = () => {
  let [email, setEmail] = useState("");
  let [password, SetPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.getItem("auth", true);
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={HandleSubmit}>
        <h2>Login Page</h2>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
          required
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          required
        ></input>
        <button className="loginButton" type="submit">
          Submit
        </button>
        <NavLink to="/register">
          <button className="registerButton">Create a  Account</button>
        </NavLink>
      </form>
    </div>
  );
};
