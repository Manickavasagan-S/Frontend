import { NavLink } from "react-router-dom";
import "../Styles/Home.css";

export const Home = () => {
  return (
    <div className="banner">
      <img src="/banner.jpeg" alt="Banner" className="banner-image" />

      <div className="banner-content">
        <h1>Welcome To Task Management System</h1>
        <NavLink to="/dashboard">
          <button className="explore-btn">Start Managing</button>
        </NavLink>
      </div>
    </div>
  );
};
