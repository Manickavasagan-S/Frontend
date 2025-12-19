import { useForm } from "react-hook-form";
import "../Styles/CreateTask.css";

export const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Complete React Project",
      description: "Complete the Mern React project",
      priority: "Medium",
      dueDate: "2024-12-12",
    },
  });

  const onSubmitHandle = async (fdata) => {
    const token = sessionStorage.getItem('token');
    console.log('Token:', token);
    
    
    try {
      const response = await fetch('https://backend-e6q4.onrender.com/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: fdata.title,
          description: fdata.description,
          priority: fdata.priority,
          dueDate: fdata.dueDate
        })
      });
      
      const data = await response.json();
      console.log('Response:', data);
      
      if (data.success) {
        alert("Task created successfully!");
        window.location.href = '/task';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log('Error:', error);
      alert('Failed to create task');
    }
  };

  return (
    <div className="CreateTask">
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <h2>Add Task</h2>

        <label>Task Name</label>
        <input
          {...register("title", {
            required: "Name is Required Please Enter",
          })}
          type="text"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <label>Description</label>
        <input {...register("description")} type="text" />

        <label>Priority</label>
        <select {...register("priority")}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label>Due Date</label>
        <input {...register("dueDate")} type="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
