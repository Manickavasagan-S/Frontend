import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "../Styles/TaskDetail.css";

export const TaskDetail = () => {
  const { data, setData } = useOutletContext();
  const { resId } = useParams();
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const found = data.find((obj) => String(obj.id) === String(resId));
    setItem(found);
    if (found) {
      setStatus(found.status || "Pending");
    }
  }, [resId, data]);

  const handleStatusUpdate = () => {
    const updatedData = data.map((task) => 
      String(task.id) === String(resId) ? { ...task, status } : task
    );
    setData(updatedData);
    setItem({ ...item, status });
    alert("Status updated successfully!");
  };

  if (!item) {
    return <div className="TaskDetails"><h2>Task not found</h2></div>;
  }

  return (
    <div className="TaskDetails">
      <div className="taskHeader">
        <h1>{item.title}</h1>
        <span className={`priorityBadge ${item.priority}`}>{item.priority}</span>
      </div>
      
      <div className="taskInfo">
        <div className="infoItem">
          <label>Description:</label>
          <p>{item.description}</p>
        </div>
        
        <div className="infoItem">
          <label>Status:</label>
          <div className="statusUpdate">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button onClick={handleStatusUpdate}>Update Status</button>
          </div>
        </div>
        
        <div className="infoItem">
          <label>Due Date:</label>
          <p>{item.dueDate}</p>
        </div>
      </div>
    </div>
  );
};
