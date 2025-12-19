import { useState } from "react";
import "../Styles/Login.css";

export const Login = () => {
  let [email, setEmail] = useState("");
  let [password, SetPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://backend-e6q4.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store only token in session
        sessionStorage.setItem('token', data.data.token);
        window.location.href = '/dashboard';
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Login failed');
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


      </form>
    </div>
  );
};
