import dbConnect from "@/dbConnect";
import Tasks from "@/models/TaskSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await dbConnect();

    if (!id) {
      return NextResponse.json(
        { message: "Id not Found" },
        { status: 404 }
      );
    }

    const task = await Tasks.findOne({ id });
    if (!task) {
      return NextResponse.json(
        { message: `Task with ${id} does not exist` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Task with ${id} fetched successfully`, task },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching Task with ${id}`, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  const updatePart = await req.json();
  const { id } = await  params;

  try {
    await dbConnect();

    if (!id) {
      return NextResponse.json(
        { message: "Id not Found" },
        { status: 404 }
      );
    }

    if (!updatePart) {
      return NextResponse.json(
        { message: "Part to be updated is required" },
        { status: 400 }
      );
    }

    const task = await Tasks.findOne({ id });

    if (!task) {
      return NextResponse.json(
        { message: `Task with ${id} does not exist` },
        { status: 404 }
      );
    }

    
    task[Object.keys(updatePart)[0]] = Object.values(updatePart)[0];
    await task.save();

    return NextResponse.json(
      { message: "Task updated successfully", task },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error updating task with ${id}`, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    await dbConnect();

    if (!id) {
      return NextResponse.json(
        { message: "Id not Found" },
        { status: 404 }
      );
    }

    const task = await Tasks.findOneAndDelete({ id });

    if (!task) {
      return NextResponse.json(
        { message: `Task with id ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Task successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting task", error: error.message },
      { status: 500 }
    );
  }
}
