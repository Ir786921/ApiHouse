import dbConnect from "@/dbConnect";
import User from "@/models/UserSchema";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await User.find();
        return NextResponse.json({message:"All Users Fetch Sucessfully", user : users},
            {status : 200}
        )
    } catch (error) {
        return NextResponse.json({message:"Error Fetching All Users"},
            {status:500}
        );
    }
}

export async function POST(req) {
    const body = await req.json();
    await dbConnect();

    try {
        if (!body) {
            return NextResponse.json({message:"No Body found"},
                {status:404}
            )
        }

        const user = new User(body);
        user.save();
        return NextResponse.json({message : "New User Created Successfully"},
            {status:201}
        )
        
    } catch (error) {
        return NextResponse.json({message : "Error Creating New User"},
            {status:500}
        )
    }

}
