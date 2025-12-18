import { useState } from "react";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registration data:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
        />

        <button className="registerButton" type="submit">
          Register
        </button>
         <NavLink to={"/login"}>
        <button className="loginButton">Already have an account? Login</button>
      </NavLink>
      </form>

     
    </div>
  );
};
