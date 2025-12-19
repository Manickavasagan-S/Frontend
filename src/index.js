import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTask } from "./Pages/CreateTask";
import { DashBoard } from "./Pages/DashBoard";
import { Register } from "./Pages/Register";
import { Task } from "./Pages/Task";
import { TaskDetail } from "./Pages/TaskDetail";
import { Productauth } from "./Pages/Protectauth";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Sign_Log_in } from "./Pages/Sign_Log_in";

const routerVariable = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,  
      },
      {
        path: "/dashboard",
        element: (
          <Productauth>
            <DashBoard />
          </Productauth>
        ),
      },
      {
        path: "/create-task",
        element: (
          <Productauth>
            <CreateTask></CreateTask>
          </Productauth>
        ),
      },
      {
        path: "/login",
        element: <Sign_Log_in></Sign_Log_in>,
      },
      {
        path: "/contact",
        element: (
          <Productauth>
            <Contact></Contact>
          </Productauth>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/task",
        element: (
          <Productauth>
            <Task></Task>
          </Productauth>
        ),
      },
      {
        path: "task/task-detail/:resId",
        element: (
          <Productauth>
            <TaskDetail></TaskDetail>
          </Productauth>
        ),
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
    <RouterProvider RouterProvider router={routerVariable}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
