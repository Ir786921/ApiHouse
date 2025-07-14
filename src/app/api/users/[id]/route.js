import dbConnect from "@/dbConnect";
import User from "@/models/UserSchema";
import { NextResponse } from "next/server";

export async function GET(req ,{ params }) {
    const { id } = await params;
    dbConnect();
    try {
        if(!id){
            return NextResponse.json({message : "ID is Missing"},
                {status:404}
            )
        }
        const user = await User.findOne({id:id});
        if (!user) {
             return NextResponse.json({message : "User With This Id Did Not Exist"},
                {status:409}
            )
        }

        return NextResponse.json({message : "User with this Id Fetch Successfully", user:user},
            {status : 200}
        )
    } catch (error) {
          return NextResponse.json({message : "Error while Fetching User"},
            {status : 500}
        )
    } 
}

export async function PATCH(req,{params}) {
    const { id } = await params;
    const partToChnage = await req.json();

    dbConnect();

    try {
        if(!id){
            return NextResponse.json({message : "ID is Missing"},
                {status:404}
            )
        }

         if(!partToChnage){
            return NextResponse.json({message : "Updating Part is Missing"},
                {status:404}
            )
        }

        const user = await User.findOne({id:id});

        if (!user) {
             return NextResponse.json({message : "User Not Exist"},
                {status:409}
            )
        }

          user[Object.keys(partToChnage)[0]] = Object.values(partToChnage)[0];
            await user.save();
        
            return NextResponse.json(
              { message: "User updated successfully", user },
              { status: 200 })




        
    } catch (error) {
         return NextResponse.json(
              { message: "Error While Updating User" },
              { status: 500 })
    }
}


export async function DELETE({params}) {
    const { id } = await params;
    dbConnect();
    try {
        if(!id){
            return NextResponse.json({message : "ID is Missing"},
                {status:404}
            )
        }

       

       

        const deletedUser = await User.findOneAndDelete({id});

         if (!deletedUser) {
             return NextResponse.json({message : "User Not Exist"},
                {status:409}
            )
        }

        return NextResponse.json({message : "User Deleted Sucessfully",deletedUser},
            {status : 200}
        )
        
        
    } catch (error) {
            return NextResponse.json({message : "Error Deleting User", error},
            {status : 200}
        )
    }
}