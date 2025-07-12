import Tasks from "@/models/TaskSchema";
import dbConnect from "@/dbConnect";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");

  const query = {};
  if(status) query.status = status;
  if(priority) query.priority = priority

  console.log(query);
  

  
       try {
          await dbConnect();
          let task = await Tasks.find(query);
       
          


           return Response.json({message : "Task Fetch Successfully",
            task : task
           } , {status : 200} )
       } catch (error) {
        return Response.json({meassage : "Error Fetching  Task"} , {status : 500 });
       }
}

export async function POST(req) {
  try {
    await dbConnect();

    const data = await req.json(); 
    if (!data) {
      return Response.json({ message: "Body not found" }, { status: 400 });
    }

    const existing = await Tasks.findOne({ id: data.id }); 
    if (existing) {
      return Response.json({ message: "Task already exists" }, { status: 409 });
    }

    const newTask = new Tasks(data);
    await newTask.save();

    return Response.json({ message: "Task created successfully" }, { status: 201 });
  } catch (err) {
    return Response.json(
      { message: "Error creating new task", error: err.message },
      { status: 500 }
    );
  }
}

