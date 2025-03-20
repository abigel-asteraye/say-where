import connectDB from "../../backend/db";
import User from "../../backend/models/Users";

export const createUser = async (email:string, password:string) => {
    await connectDB();

    const user = new User({email, password})
    await user.save();
    return user;
};