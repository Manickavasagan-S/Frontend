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

  const onSubmitHandle = (fdata) => {
    console.log(fdata);
    fdata.title.split(",").map((e) => e.trim());
    alert("Data added successfully");
    fdata.id = Date.now();

    console.log(fdata);
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
