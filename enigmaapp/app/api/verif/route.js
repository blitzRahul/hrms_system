
import { NextResponse } from "next/server";



// route to check if a teamcode is valid
export async function POST(req) {
   // try {
        //request format
        //role: employee or HR?
        //action: what action to do?
        //other data... role and action are mandatory

        // get teamcode from request data
        const requestData = await req.json()
        const data = requestData
        console.log(data)    
    return NextResponse.json({message:"hello wolrd"},{status:200})
//}
    // catch (error) {
    //     console.log(error)
    //     return NextResponse.json({ message: 'internal server error' }, { status: 500 })
    // }
}