import mongoose, { Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  favorites: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Spot',
    },
  ],
});

export default mongoose.models.User ||
  mongoose.model<IUser>('User', userSchema);
