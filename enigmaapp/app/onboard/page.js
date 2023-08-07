'use client'

import { useState,useEffect} from "react"
import { useRouter } from 'next/navigation';



export default function Onboard() {

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
      const name = document.getElementById("name").value;
      const role = document.getElementById("role").value;
      const password = document.getElementById("password").value;
      const data = {id:empid,name:name,role:role,password:password};
      const response = await fetch('/api/verify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:details.id,password:details.password,employee:data,role:"H",action:"ONBOARD"})
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
              <div>
              <input id="empid" className="text-black" placeholder="employee id"/>
              </div>
              <div>
              <input id="name" className="text-black" placeholder="name"/>
              </div>
              <div>
              <input id="role" className="text-black" placeholder="role"/>
              </div>
              <div>
              <input id="password" className="text-black" placeholder="password"/>
              </div>
              <button className="bg-white text-black p-3 rounded-lg" onClick={handleDeboard}>onboard</button>
            </div>
      </div>

    </main>
  )

    }