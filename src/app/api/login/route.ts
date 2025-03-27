import { NextResponse } from "next/server";
import connectDB from "@/backend/db";
import User from "@/backend/models/Users";
import bcrypt from "bcryptjs"; 


export async function POST(request: Request) {
    try {
      await connectDB();
  
      const { email, password } = await request.json();
      const user = await User.findOne({ email });

      if (!user) {
        return NextResponse.json(
          { message: "This user is not found. Check the credentials" },
          { status: 401 }
        );
      }
  
      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("isMatch", isMatch);
      if (!isMatch) {
        return NextResponse.json(
          { message: "Password is incorrect" },
          { status: 401 }
        );
      }
  
      // If login is successful
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }