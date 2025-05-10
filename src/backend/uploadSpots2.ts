import connectDB from './db';
import Spot from './models/Spots';

const spots = [
  {
    name: "Johnny's Bar & Grille",
    description:
      'Popular spot for American comfort food and a lively bar scene.',
    location: {
      latitude: 42.2035,
      longitude: -72.5789,
    },
    type: 'restaurant',
    rating: 4.0,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'The Village Commons',
    description:
      'A central hub with multiple dining options, from cafes to restaurants.',
    location: {
      latitude: 42.2042,
      longitude: -72.5775,
    },
    type: 'other',
    rating: 3.8,
    review: [],
    tags: ['dining', 'essentials'],
  },
  {
    name: 'Thirsty Mind Coffee and Wine Bar',
    description:
      'Cozy cafe offering coffee, pastries, light bites, and a selection of wines.',
    location: {
      latitude: 42.2045,
      longitude: -72.5768,
    },
    type: 'cafe',
    rating: 4.3,
    review: [],
    tags: ['dining', 'study'],
  },
  {
    name: "Antonio's Pizza",
    description:
      'Local favorite for delicious and creative pizza slices and whole pies.',
    location: {
      latitude: 42.2048,
      longitude: -72.576,
    },
    type: 'restaurant',
    rating: 4.5,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'South Hadley Chinese Restaurant',
    description: 'Classic Chinese dishes in a casual setting.',
    location: {
      latitude: 42.206,
      longitude: -72.5745,
    },
    type: 'restaurant',
    rating: 3.5,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'Subway',
    description:
      'Chain restaurant offering customizable sandwiches and salads.',
    location: {
      latitude: 42.2055,
      longitude: -72.575,
    },
    type: 'restaurant',
    rating: 3.2,
    review: [],
    tags: ['dining', 'essentials'],
  },
  {
    name: "Brunelle's Marina",
    description:
      'Waterfront restaurant with seafood and American fare, offering scenic views.',
    location: {
      latitude: 42.208,
      longitude: -72.5855,
    },
    type: 'restaurant',
    rating: 4.1,
    review: [],
    tags: ['dining', 'outdoor'],
  },
  {
    name: 'The Odyssey',
    description:
      'Upscale dining experience with Greek and Mediterranean cuisine.',
    location: {
      latitude: 42.211,
      longitude: -72.569,
    },
    type: 'restaurant',
    rating: 4.4,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'White Lion Brewing Co. - South Hadley',
    description: 'Local brewery offering craft beers and a menu of pub fare.',
    location: {
      latitude: 42.203,
      longitude: -72.5795,
    },
    type: 'restaurant',
    rating: 4.2,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'Food 101',
    description:
      'Modern American cuisine with a focus on fresh, local ingredients.',
    location: {
      latitude: 42.2025,
      longitude: -72.58,
    },
    type: 'restaurant',
    rating: 4.3,
    review: [],
    tags: ['dining'],
  },
  {
    name: 'Showcase South Hadley Festival',
    description:
      'A weekend celebration featuring live music, art exhibits, and family-friendly activities across South Hadley.',
    location: {
      latitude: 42.2068,
      longitude: -72.5742,
    },
    type: 'event',
    rating: 4.6,
    review: [],
    tags: ['events'],
  },
  {
    name: 'Big Y',
    description:
      'Local grocery store offering fresh produce, bakery items, and a full-service deli.',
    location: {
      latitude: 42.2105,
      longitude: -72.5923,
    },
    type: 'grocery',
    rating: 4.2,
    review: [],
    tags: ['essentials'],
  },
  {
    name: 'Mount Holyoke Range State Park',
    description:
      'Expansive park featuring hiking trails, scenic views, and diverse wildlife.',
    location: {
      latitude: 42.2886,
      longitude: -72.539,
    },
    type: 'park',
    rating: 4.7,
    review: [],
    tags: ['outdoor', 'gems'],
  },
  {
    name: 'South Hadley Public Library',
    description:
      'Modern library with comfortable reading rooms and views of the Connecticut River.',
    location: {
      latitude: 42.2061,
      longitude: -72.5747,
    },
    type: 'library',
    rating: 4.8,
    review: [],
    tags: ['study'],
  },
];

async function uploadSpots2() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    await Spot.insertMany(spots);
    console.log('Spots uploaded successfully!');
  } catch (error) {
    console.error('Error uploading spots:', error);
  } finally {
    process.exit();
  }
}

uploadSpots2();
