import { NextResponse } from "next/server";
import connectDB from "@/backend/db";
import Spot from "@/backend/models/Spots";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, description, location, type } = body;

    // Validate the request body
    if (!name || !description || !location || !type) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a new spot
    const newSpot = await Spot.create({
      name,
      description,
      location,
      type,
    });

    return NextResponse.json(
      { message: "Spot created successfully", spot: newSpot },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating spot:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET() {
    try {
      await connectDB();
      const spots = await Spot.find(); // Fetch all spots
      return NextResponse.json(spots);
    } catch (error) {
      console.error("Error fetching spots:", error);
      return NextResponse.json({ message: "Error fetching spots" }, { status: 500 });
    }
  }