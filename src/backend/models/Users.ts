import mongoose, { Schema, model, models } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    // name: string;
    // isAdmin: boolean;
  }

const userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    // name:{
    //     type:String,
    //     required:true
    // },
    // isAdmin: {
    //     type: Boolean,
    //     default: false,
    // },

});

const User = models.User || model('User', userSchema);

export default User;