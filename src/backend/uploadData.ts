import connectDB from './db';
import Users from './models/Users';
import Spot from './models/Spots';
import Favorite from './models/Favorites';

async function uploadData() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const user1 = await Users.create({
      email: 'student1@example.com',
      password: 'password123',
      name: 'Student One',
      isAdmin: false,
    });

    const user2 = await Users.create({
      email: 'student2@example.com',
      password: 'password123',
      name: 'Student Two',
      isAdmin: false,
    });

    console.log('Users added:', user1, user2);

    const spot1 = await Spot.create({
      name: 'Cozy Cafe',
      description: 'A quiet cafe perfect for studying.',
      location: { latitude: 40.7128, longitude: -74.006 },
      type: 'cafe',
    });

    const spot2 = await Spot.create({
      name: 'Central Library',
      description: 'A spacious library with plenty of seating.',
      location: { latitude: 40.73061, longitude: -73.935242 },
      type: 'library',
    });

    console.log('Spots added:', spot1, spot2);

    const favorite1 = await Favorite.create({
      user: user1._id,
      spot: spot1._id,
    });

    const favorite2 = await Favorite.create({
      user: user2._id,
      spot: spot2._id,
    });

    console.log('Favorites added:', favorite1, favorite2);

    console.log('Data upload complete!');
  } catch (error) {
    console.error('Error uploading data:', error);
  } finally {
    process.exit();
  }
}

uploadData();
