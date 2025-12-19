import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Header.css";
import "../Styles/TaskCard.css";

const Header = () => {
  const token = sessionStorage.getItem('token');
  const [user, setUser] = useState(null);
  const isLoggedIn = !!token;
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    if (token) {
      
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ role: payload.role });
      } catch (error) {
        console.log('Token decode error:', error);
      }
    }
  }, [token]);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header>
      <div>
        <NavLink to={"/"}> Home </NavLink>
        {isLoggedIn && <NavLink to={"/dashboard"}> DashBoard </NavLink>}
        {isLoggedIn && <NavLink to={"/task"}> Task </NavLink>}
        {isLoggedIn && isAdmin && <NavLink to={"/create-task"}> Create Task </NavLink>}
        {isLoggedIn && <NavLink to={"/contact"}> About </NavLink>}
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout}> Logout </button>
        ) : (
          <NavLink to={"/login"}> Login / Signin </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
