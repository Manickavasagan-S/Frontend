import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTask } from "./Pages/CreateTask";
import { DashBoard } from "./Pages/DashBoard";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Task } from "./Pages/Task";
import { TaskDetail } from "./Pages/TaskDetail";

const routerVariable = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/create-task",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/task",
        element: <Task></Task>,
      },
      {
        path: "/task-detail",
        element: <TaskDetail></TaskDetail>,
      },
      {
        path: "*",
        element: <h1>404 Page not Founded </h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariable}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
