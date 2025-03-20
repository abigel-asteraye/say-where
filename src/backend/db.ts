import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not set. Please define it ');
}

let cached = (global as any).mongoose || {conn: null, promise: null};

async function connectDB(){
    if (cached.conn) {
        return cached.conn;
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(MONGODB_URI as string, {
            dbName: "say-where-cluster",
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;