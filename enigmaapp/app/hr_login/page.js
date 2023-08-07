'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';



export default function Hr_login() {

  const [isCodeValid, setCodeValid] = useState(false)

  const router = useRouter()

  
     const handleLogin=async ()=>{
      const id = document.getElementById("userid").value;
      const password = document.getElementById("userpassword").value;
      console.log(id,password)
      const data = {id:id,password:password,role:"H",action:"LOGIN"};
      const response = await fetch('/api/verify/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if(response.status==200){

        const serverData = await response.json()
        console.log(serverData)
        localStorage.setItem("hr_details",JSON.stringify({id:id,password:password,name:serverData.name}))
        //good to redirect
        router.push("/hr_page/")
      }
    

    }


 
  return (
<main className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div className=" h-3/5  w-max  flex flex-col justify-center items-center">
      <h1>HR Login</h1>
      <input id="userid" placeholder="id" className="text-black"/>
      <input id="userpassword" placeholder="password" className="text-black"/>
      <button onClick={handleLogin}>login</button>
      </div>
    </main>
  )

    }