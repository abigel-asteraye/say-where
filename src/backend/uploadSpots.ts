import connectDB from "./db";
import Spot from "./models/Spots";

const spots = [
      {
      name: "Sunset Peak",
      description: "Sunset and sunrise are amazing from this view. The first peak in the Seven Sisters range and provides access to the rest. No car needed as PVTA goes right to the trailhead, just 10 minutes from campus.",
      location: {
        latitude: 42.3918,
        longitude: -72.5285
      },
      type: "hike",
      rating: 4.8,
      review: [],
      tags: ["outdoor"]
    },
    {
      name: "Ashley Reservoir",
      description: "Beautiful reservoir with trails going through and around it. Dirt and gravel paths, very flat terrain, and a parking lot.",
      location: {
        latitude: 42.2095,
        longitude: -72.6399
      },
      type: "reservoir",
      rating: 4.5,
      review: [],
      tags: ["outdoor"]
    },
    {
      name: "Lithia Springs",
      description: "An easy walk through the woods to an enchanting pond. The trail is about two miles long with lots of shade. No parking at the trailhead, but nearby parking available.",
      location: {
        latitude: 42.2632,
        longitude: -72.6208
      },
      type: "ponds",
      rating: 4.7,
      review: [],
      tags: ["outdoor"]
    },
    {
      name: "Seven Sisters Range",
      description: "Amazing hike for more experienced hikers, but also a challenge for beginners. Bring water as it's a few hours with steep uphill/downhill sections.",
      location: {
        latitude: 42.3091,
        longitude: -72.5269
      },
      type: "trail",
      rating: 4.9,
      review: [],
      tags: ["outdoor"]
    },
    {
      name: "Mount Holyoke",
      description: "Very beautiful with an amazing view house at the top. Accessible by car or by walking a steep paved road or dirt trails.",
      location: {
        latitude: 42.2956,
        longitude: -72.5769
      },
      type: "mountain",
      rating: 4.6,
      review: [],
      tags: ["outdoor"]
    }
];

async function uploadSpots() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    await Spot.insertMany(spots);
    console.log("Spots uploaded successfully!");
  } catch (error) {
    console.error("Error uploading spots:", error);
  } finally {
    process.exit(); 
  }
}

uploadSpots();