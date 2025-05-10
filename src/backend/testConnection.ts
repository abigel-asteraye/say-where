import connectDB from './db';

async function testConnection() {
  try {
    await connectDB();
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

testConnection();
