import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URL =
  'mongodb+srv://aster22a:M2zFd4tM3RbAisL9@say-where-cluster.vcozm.mongodb.net/say-where?retryWrites=true&w=majority';
// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = URL;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not set. Please define it ');
}

const cached = (global as any).mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string, {
        dbName: 'say-where',
      })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
