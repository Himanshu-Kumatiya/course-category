import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
export default function Card(props) {
    let course=props.course;
    
    function chgLikes()
    {
        let id=course.id;
        let arr=[...props.likedcourses];
        if(props.likedcourses.includes(id))
        {
            arr.splice(props.likedcourses.indexOf(id),1);
            props.chgLike(arr);
            toast.warning("Like removed");
        }
        else
        {
            arr.push(id);
            props.chgLike(arr);
            toast.success("Liked Successfully");
            console.log(props.likedcourses);
        }
    }
    return (

        <div className=' p-2 w-[280px] h-[410px] shadow-lg shadow-blue-500 border-[4px] border-black-300 border-solid '>
            <div className='relative'>
                <img src={`${course.image.url}`} className='w-fit h-[200px]' alt={`${course.image.alt}`} />
                <button className="absolute bottom-[-5.5px] right-[-5.5px] bg-white rounded-full w-[40px] h-[40px] grid place-items-center" onClick={chgLikes} >
                    {
                        props.likedcourses.includes(course.id)===true?(<FcLike fontSize="30px" />):(<FcLikePlaceholder fontSize="30px"  />)
                    }
                </button> 
            </div>
            <div className='mt-[20px] text-[22px] font-[600]'>{course.title}</div>
            <div>
                {(course.description.length>100?course.description.substr(0,100):course.description)+"....."}
            </div>
         </div>
    );
}