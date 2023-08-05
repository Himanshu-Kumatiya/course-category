import React, { useState ,useEffect} from "react";
// import Navbar from  "./components/Navbar";
// import Cards from "./components/Cards"
// import Filter from "./components/Filter"
// import { apiUrl, filterData  } from "./data";
// import { useState,useEffect } from "react";
// import Spinner from "./components/Spinner";
// import {toast} from "react-toastify";
import Category from "./components/category";
import {filterData,apiUrl} from './data';
import {toast} from "react-toastify"
const App = ()=>{ 
  const [courses,setcourse]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState("All");
  
  useEffect(()=>{
    async function call()
    {
      setLoading(true);
        try{

            const response=await fetch(apiUrl);
            let data=await response.json();
            setcourse(data.data);
            console.log(data.data);
            setLoading(false);
          }
        catch(err)
        {
            toast.error("Something went wrong");
        }
    }
    call();
  },[]);
  return (
    <div className="flex mt-[4vh]  flex-col  text-center">
      <nav className="font-[800] text-[23px]">Top courses</nav>
      <Category filters={filterData} courses={courses} category={category} setCategory={setCategory} loading={loading}  />

    </div>
      );
};

export default App;
