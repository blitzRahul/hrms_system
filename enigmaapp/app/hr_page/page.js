'use client'

import { useState,useEffect} from "react"
import { useRouter } from 'next/navigation';



export default function Hr_page() {

  const [details,setDetails] = useState({name:'',id:'',password:'',employees:[],messages:[]})
  const router = useRouter()

  useEffect( function(){

    //fetch the data from localstorage
    const data = JSON.parse(localStorage.getItem("hr_details"))
    if(data){
      
      
      
      const getData = async ()=>{
        const response = await fetch('/api/verify/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id:data.id,password:data.password,role:"H",action:"SHOW"})
        });
  
        if(response.status==200){
          //get the fucking data
  
          const {employees,messages} = await response.json()
  
          console.log(employees)
          console.log(messages)
          setDetails({name:data.name,id:data.id,password:data.password,employees:employees,messages:messages})
        }
      }

      getData();
      //query API fetch data
    }else{
      router.push('/hr_login/')
    }
    return(()=>{});
   },[])


 
  return (
<main className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center">
      <div className=" h-min  w-10/12 flex flex-col justify-center items-center">
      <div>
      <div id="details-div">
          <h1 className="text-4xl font-black">HR Dashboard</h1>
          <span className="text-2xl font-bold">{details.name} #{details.id}</span>
      </div>
      <div id="employee-detail-div">
      <h1 className="text-xl font-bold mt-8">Employees</h1>
        {details.employees.map(function(value,id){
          return(<div className="mt-3">
                <div>{value.name}#{value.id}</div>
                <div>{value.role}</div>
          </div>)
        })}
      </div>
      <div id="messages-div">
        {
          details.messages.length<1?<></>:details.messages.map(

            function(value,id){
              return(<div>
                {value.name}#{value.id} says: {value.message}
              </div>)
            }
          )
          
        }
      </div> 

             
      </div>
        <div className="mt-7"><a href="onboard/" className="bg-white text-black m-4 p-3 rounded-full text-lg">onboard</a><a href="deboard/" className="bg-white text-black m-4 p-3 rounded-full text-lg">deboard</a></div>
      </div>
    </main>
  )

    }