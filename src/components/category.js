import React,{useState} from "react";
import Card from "./Card";
import Spinner from "./Spinner";
export default function Category(prop1)
{
    const [likedcourses,chgLike]=useState([]);
    function getCourses(){
        if(prop1.category==="All")
        {
            let allcourses=[];
            Object.values(prop1.courses).forEach((element) => {
                element.forEach((course)=>{
                    allcourses.push(course);
                })
            });
            return allcourses;
        }
        return prop1.courses[prop1.category];
        
    }
    
    return(
        <div className="flex flex-col items-center justify-center">
            <ul className="flex h-[30px] font-[600] mt-[3.5vh] flex-row gap-4 justify-center ">
            {
                prop1.filters.map((val)=>{
                    return <li key={val.id}className={`cursor-pointer  
                    ${prop1.category===val.title?"border-b-4":""}`} onClick={()=>prop1.setCategory(val.title)}>{val.title}</li>
                })
            }
            </ul>
            <div className="flex mt-[3.5vh] flex-wrap items-center flex-row w-[70vw] gap-4 justify-center ">
                {
                    prop1.loading===true?(<Spinner/>):(getCourses().map((ele)=>{
                        return <Card key={ele.id} course={ele} likedcourses={likedcourses} chgLike={chgLike}/>
                    }))
                }
            </div>
        </div>
        
    );
}