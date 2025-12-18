import { NavLink } from "react-router-dom";
import "../Styles/Header.css";
import "../Styles/TaskCard.css";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to={"/dashboard"}> DashBoard </NavLink>
        <NavLink to={"/task"}> Task </NavLink>
        <NavLink to={"/create-task"}> Create Task </NavLink>
        <NavLink to={"/contact"}> About </NavLink>
      </div>
      <div>
        <NavLink to={"/login"}> Login / Signin </NavLink>
      </div>
    </header>
  );
};
export default Header;
