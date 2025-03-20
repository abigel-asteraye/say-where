import { NextResponse } from "next/server";
import { createUser } from "../createUser";



export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Validate the request body
    if (!body || !body.email || !body.password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const { email, password } = body;

    // Create the user
    const user = await createUser(email, password);

    return NextResponse.json({ message: "User created", user }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}