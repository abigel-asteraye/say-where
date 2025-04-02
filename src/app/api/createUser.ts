import { hash } from "crypto";
import connectDB from "../../backend/db";
import User from "../../backend/models/Users";
import bcrypt from "bcrypt";

export const createUser = async (name:String, email:string, password:string) => {
    await connectDB();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({name, email, password:hashedPassword});
    await user.save();
    return user;
};