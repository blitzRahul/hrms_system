'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';



export default function Home() {

  const [isCodeValid, setCodeValid] = useState(false)

  const router = useRouter()
  const handleChange = (e) => {
    setCodeValid(false)

    const input = e.target.value.toLowerCase()
    e.target.value = input
  }

  const verifyCode = async (teamCode) => {
    const playerName = document.getElementById('playername').value
    localStorage.setItem('playerName', playerName)
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamCode: teamCode })
      })
      
      if(response.status === 200){
        setCodeValid(true);
        localStorage.setItem("teamCode", teamCode);
        router.push('/prologue/1');
      }
      else{
        setCodeValid(false);
      }
        
    }
  
 
  return (
<main className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div className=" h-3/5  w-max  flex flex-col justify-center items-center">
      <div className="text-5xl font-black m-5">HR PORTAL</div>
      <a href="employee_login/" className="w-52 h-12 bg-white text-black p-4 m-2 rounded-full font-bold text-center hover:border-2 hover:border-green-400 ">Employee Login</a>
      <a href="hr_login/" className="w-52 h-12 bg-white text-black p-4 m-2 rounded-full font-bold text-center hover:border-2 hover:border-green-400 ">HR Login</a>
      
      </div>
      
    </main>
  )

    }