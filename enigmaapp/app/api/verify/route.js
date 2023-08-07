
import { NextResponse } from "next/server";


//undefined is false

let HRDB = 
{
    id:69420,
    name:"Hugh Jarse",
    password:"HugeJarse@123",
    messages:[],
}



let EMPDB = [
    {
        id:666,
        name:"Moe Lester",
        password:"MoeLester@123",
        role:"developer",
    },
    {
        id:80085,
        name:"Ben Dover",
        password:"BenDover@123",
        role:"data dude",
    }
]

// route to check if a teamcode is valid
export async function POST(req) {
    try {
        //request format
        //role: employee or HR?
        //action: what action to do?
        //other data... role and action are mandatory

        // get teamcode from request data
        const requestData = await req.json()
        const data = requestData
        
        if(data.role=="E"){
                //for employee
                if(data.action=="LOGIN"){
                    //check the dat sent by the user
                    for(let i=0;i<EMPDB.length;i++){
                        if(EMPDB[i].id==data.id && EMPDB[i].password==data.password){
                            return NextResponse.json({id:EMPDB[i].id,name:EMPDB[i].name,role:EMPDB[i].role},{status:200})
                        }
                    }
                    return NextResponse.json({message:"employee not found"},{status:404})
                }

                if(data.action=="MESSAGE"){
                    for(let i=0;i<EMPDB.length;i++){
                        if(EMPDB[i].id==data.id && EMPDB[i].password==data.password){
                            HRDB.messages.push({name:EMPDB[i].name,id:EMPDB[i].id,message:data.message})
                            return NextResponse.json({message:"message sent"},{status:200})
                        }
                    }
                    return NextResponse.json({message:"employee not found"},{status:404})

                }

                

        }else{
            //for HR
            //functions onboard an employee
            //deboard an employee
            //view all employees ofc
            //login
            
            
             if(data.action=="LOGIN"){
                if(HRDB.id==data.id && HRDB.password==data.password){
                    return NextResponse.json({name:HRDB.name},{status:200})
                }else{
                   return NextResponse.json({message:"HR not found"},{status:404})
                }
                }


                if(data.action=="SHOW"){
                    if(HRDB.id==data.id && HRDB.password==data.password){
                        let passwdFilteredUsers = EMPDB.map((value,index)=>({id:value.id,name:value.name,role:value.role}))

                            return NextResponse.json({employees:passwdFilteredUsers,messages:HRDB.messages},{status:200})
                            }else{
                                return NextResponse.json({message:"HR not found"},{status:404})
                                }
                }


            if(data.action=="ONBOARD"){
                if(HRDB.id==data.id && HRDB.password==data.password){
                    EMPDB.push(data.employee)
     return NextResponse.json({message:"onboarded"},{status:200})
 }else{
    return NextResponse.json({message:"HR not found"},{status:404})
 }
}


            if(data.action=="DEBOARD"){
                if(HRDB.id==data.id && HRDB.password==data.password){
                    for(let  i=0;i<EMPDB.length;i++){
                        if(EMPDB[i].id==data.empid){
                            EMPDB.splice(i,1)
                            return NextResponse.json({message:"deboarded"},{status:200})
                        }
                    }
                    return NextResponse.json({message:"EMP not found"},{status:404})
                }else{
                    return NextResponse.json({message:"HR not found"},{status:404})
                }
            }

        }

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'internal server error' }, { status: 500 })
    }
}