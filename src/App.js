//import logo from './logo.svg';
import {  Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {

  let [data,setData]=useState([])
  

  useEffect(()=>{
    const FetchTaskApi  = async ()=>{
      try{
        const respose = await fetch("http://localhost:3000/Task.json");
        const da=await respose.json();
        setData(da)
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
        data,
      }}
      ></Outlet>
    </div>
  );
}

export default App;