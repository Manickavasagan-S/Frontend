import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="links">
        <NavLink to={"/"}> DashBoard </NavLink>
        <NavLink to={"/task"}> Task </NavLink>
        <NavLink to={"/create-task"}> Create Task </NavLink>
        <NavLink to={"/task-detail"}> Task Detail </NavLink>
         <NavLink to={"/login"}> Login </NavLink>
        <NavLink to={"/register"}> Register </NavLink>
      </div>
    </header>
  );
};
export default Header;
