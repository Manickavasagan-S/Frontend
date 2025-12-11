import { NavLink, useOutletContext } from "react-router-dom";
import "../Styles/Dashboard.css";
import { useState } from "react";

export const DashBoard = () => {
  const { data } = useOutletContext();

  let [BgColor, SetBgColor] = useState("");

  let Background = () => {
    if (data.priority === "High") {
      SetBgColor("High");
    } else if (data.priority === "Medium") {
      SetBgColor("Medium");
    } else if (data.priority === "Low") {
      SetBgColor("Low");
    }
  };

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
                  <button>View Task</button>
                </div>
              ))}
          </div>
        </div>

        <div className="right">
          <NavLink to={"/task"}>
            <button className="View">View Task</button>
          </NavLink>
          <NavLink to={"/create-task"}>
            <button className="Create">Create Task</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
