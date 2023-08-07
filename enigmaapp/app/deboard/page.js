'use client'

import { useState,useEffect} from "react"
import { useRouter } from 'next/navigation';



export default function Deboard() {

  const [details,setDetails] = useState({id:'',password:''})
  
  const router = useRouter()

  useEffect( function(){

    //fetch the data from localstorage
    const data = JSON.parse(localStorage.getItem("hr_details"))
    if(data){
      setDetails({id:data.id,password:data.password})
      
    
    
      //query API fetch data
    }else{
      router.push('/hr_login/')
    }
    return(()=>{});
   },[])


   async function handleDeboard(){
      const empid = document.getElementById("empid").value;
      const response = await fetch('/api/verify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:details.id,password:details.password,empid:empid*1,role:"H",action:"DEBOARD"})
      });

      if(response.status==200){

        const serverData = await response.json()
        console.log(serverData)
        
        //good to redirect
        router.push("/hr_page/")
      }
   }
 
  return (
<main className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div className=" h-min  w-10/12 flex flex-col justify-center items-center">
            <div>
              <input id="empid" className="text-black" placeholder="employee id"/><button className="bg-white text-black p-3 rounded-lg" onClick={handleDeboard}>deboard</button>
            </div>
      </div>

    </main>
  )

    }