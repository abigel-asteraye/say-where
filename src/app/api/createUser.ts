import connectDB from "../../backend/db";
import User from "../../backend/models/Users";

export const createUser = async (name:String, email:string, password:string) => {
    await connectDB();

    const user = new User({name, email, password})
    await user.save();
    return user;
};