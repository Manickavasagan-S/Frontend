//import logo from './logo.svg';
import {  Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {

  let [data,setData]=useState([])
  

  useEffect(()=>{
    const FetchTaskApi = async ()=>{
      const token = sessionStorage.getItem('token');
      if (!token) return;
      
      try{
        const response = await fetch("https://backend-e6q4.onrender.com/api/tasks", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      }
      catch(err){}
    };
    FetchTaskApi()
  },[]);




  return (
    <div className="App">
      <Header></Header>
      <Outlet 
      context={{
        data,setData
      }}
      ></Outlet>
    </div>
  );
}

export default App;