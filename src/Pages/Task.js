import { NavLink, useOutletContext } from "react-router-dom";
//import { NavLink, useOutletContext } from "react-router-dom";
import "../Styles/Task.css";
import { useState } from "react";

export const Task = () => {
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
    <div className="Task">
      {data.map((data) => (
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
  );
};
