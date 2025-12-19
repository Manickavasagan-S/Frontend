import { NavLink, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Dashboard.css";
import "../Styles/TaskCard.css";

export const DashBoard = () => {
  const { data } = useOutletContext();
  const token = sessionStorage.getItem('token');
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(payload.role === 'admin');
      } catch (error) {
        setIsAdmin(false);
      }
    }
  }, [token]);
  
  return (
    <div className="Dashboard">
      <h1>Task Management System</h1>

      <section>
        <div className="left">
          <h2>High Priority Task</h2>
          <div className="Htask">
            {data
              .filter((task) => task.priority === "High")
              .map((data) => (
                <div className={`TaskCard ${data.priority}`}>
                  <section>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </section>

                  <p>{data.dueDate}</p>
                  <NavLink to={`/task/task-detail/${data.id}`}>
                    <button>View Task</button>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>

        <div className="right">
          <NavLink to={"/task"}>
            <button className="View">View Task</button>
          </NavLink>
          {isAdmin && (
            <NavLink to={"/create-task"}>
              <button className="Create">Create Task</button>
            </NavLink>
          )}
        </div>
      </section>
    </div>
  );
};
