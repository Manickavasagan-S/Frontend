import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to={"/"}>
           <img src="https://www.bing.com/th/id/OIP.jWEs8gQpii5rurcSqF1gPAHaHa?w=192&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo"></img>
        </NavLink>
          
      </div>
      <div className="links">
        <NavLink to={"/"}> DashBoard </NavLink>
        <NavLink to={"/task"}> Task </NavLink>
        <NavLink to={"/create-task"}> Create Task </NavLink>
        {/* <NavLink to={"/task-detail"}> Task Detail </NavLink> */}
        <NavLink to={"/login"}> Login </NavLink>
        <NavLink to={"/register"}> Register </NavLink>
      </div>
    </header>
  );
};
export default Header;
