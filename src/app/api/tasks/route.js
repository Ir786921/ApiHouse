// app/api/tasks/route.js

import Tasks from "@/models/TaskSchema";
import dbConnect from "@/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");

  const query = {};
  if (status) query.status = status;
  if (priority) query.priority = priority;

  try {
    await dbConnect();
    const task = await Tasks.find(query);
    return NextResponse.json(
      { message: "Tasks fetched successfully", task },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching tasks", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const data = await req.json();
    if (!data) {
      return NextResponse.json({ message: "Body not found" }, { status: 400 });
    }

    const existing = await Tasks.findOne({ id: data.id });
    if (existing) {
      return NextResponse.json({ message: "Task already exists" }, { status: 409 });
    }

    const newTask = new Tasks(data);
    await newTask.save();

    return NextResponse.json({ message: "Task created successfully" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error creating task", error: err.message },
      { status: 500 }
    );
  }
}
