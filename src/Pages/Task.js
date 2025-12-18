import { NavLink, useOutletContext } from "react-router-dom";
import { useState } from "react";
import "../Styles/Task.css";
import "../Styles/TaskCard.css";

export const Task = () => {
  const { data } = useOutletContext();
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filteredTasks = data.filter((task) => {
    const statusMatch = statusFilter === "All" || task.status === statusFilter;
    const priorityMatch = priorityFilter === "All" || task.priority === priorityFilter;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="Task">
      <div className="taskFilters">
        <div className="filterGroup">
          <label>Status:</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="filterGroup">
          <label>Priority:</label>
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div className="TaskGrid">
        {filteredTasks.map((task) => (
          <div key={task.id} className={`TaskCard ${task.priority}`}>
            <section>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </section>

            <p>{task.dueDate}</p>

            <NavLink to={`/task/task-detail/${task.id}`}>
              <button>View Task</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
