import { NextResponse } from "next/server";
import { createUser } from "../createUser";



export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    console.log("Request body:", body);

    // Validate the request body
    if (!body || !body.email || !body.password || !body.name) {
      return NextResponse.json(
        { message: "Name, Email and password are required" },
        { status: 400 }
      );
    }

    const { name, email, password } = body;

    // Create the user
    const user = await createUser(name, email, password);

    return NextResponse.json({ message: "User created", user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}