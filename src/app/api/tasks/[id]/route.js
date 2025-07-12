import dbConnect from "@/dbConnect";
import Tasks from "@/models/TaskSchema";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);
  
  
   try {
    await dbConnect();

    if (!id) {
        return Response.json({message:"Id not Found"},
            {status:404}
        )
    }

    const task = await Tasks.findOne({id : id});
    console.log(task);
    

    if(!task){
        return Response.json({message : `Task with ${id} does not Exit`},
            {status : 404}
        )
    }

    return Response.json({message : `Task with ${id} fetch Sucessfully` , task},
       
        {status:200}
    )


    
   } catch (error) {
     return Response.json({message : `Error Fetching Task with ${id} ` + error},
        {status:500}
    )
   }
}

export async function PATCH(req,{ params }){
    const updatePart =  await req.json();
    console.log(updatePart);
    
    const{ id } = await  params;
    console.log(id);
    
    try {
        await dbConnect();
        if (!id) {
        return Response.json({message:"Id not Found"},
            {status:404}
        )
    }

       if (!updatePart) {
        return Response.json({message:"Part to be Updated Required"},
            {status:404}
        )
    }

      const task =  await Tasks.findOne({id:id});

     

      
      

       if(!task){
        return Response.json({message : `Task with ${id} does not Exit`},
            {status : 404}
        )


    
    }

     task[Object.keys(updatePart)[0]] = Object.values(updatePart)[0];
      
     await task.save();
    
    return Response.json({message: "Task Updated Successfully" , task}, {status : 200})




        
    } catch (error) {
        return Response.json({message : `Error Updating Task with ${id} ` + error },{status : 500});

    }
}

export async function DELETE(req,{ params }){
    const { id } = await params;

 try {
    if (!id) {
        return Response.json({message : "Id not Found"},{status : 404});
    }

    const task = await Tasks.findOneAndDelete({id: id});
    if (!task) {
        return Response.json({message : "Task With this Id Not Found"} ,{status : 404});
    }

    return Response.json({message : "Task Successfully Deleted"} ,{status : 200});

 } catch (error) {
     return Response.json({message : "Error Deleting Task"} ,{status : 500});

 }   
}