'use client'


import { useState,useEffect } from "react"
import { useRouter } from 'next/navigation';



export default function Employee_page() {
//details are visible
//send message to HR
const router = useRouter()
 const [details,setDetails] = useState({name:'',role:'',id:'',password:''});
 useEffect(function(){

  //fetch the data from localstorage
  const data = JSON.parse(localStorage.getItem("employee_details"))
  if(data){
    setDetails({name:data.name,role:data.role,id:data.id,password:data.password})
    
  }else{
    router.push('/employee_login/')
  }
 },[])


  return (
<main className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div className=" h-3/4 w-3/4 flex flex-col justify-center items-center">
      {details.name.length<1?<></>:
      <>
      <div>{details.name}<span>#{details.id}</span></div>
      <div>{details.role}</div>
      <div><input type="area" placeholder="write a message to HR"/><button>send</button></div>  
      </>    
      }

      </div>
    </main>
  )

    }