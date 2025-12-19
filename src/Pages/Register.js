import { useState } from "react";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const response = await fetch('https://backend-e6q4.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        sessionStorage.setItem('token', data.data.token);
        alert("Registration successful!");
        window.location.href = '/dashboard';
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Registration failed');
    }
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

        <label>Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

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
