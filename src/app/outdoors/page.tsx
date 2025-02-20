import React from "react";
import CategoryPage from "../components/CategoryPage";
import Navbar from "../components/Navbar";

const outdoorSpots = [
  {
    name: "Bachelor Brook / Stony Brook Conservation Area",
    latitude: 42.2567,
    longitude: -72.5742,
    description:
      "Very pretty with wetlands and fields and views of water. There are packed dirt trails which are good for wheels if it's not too muddy out, lots of shade, and the area is not very hilly.",
      
  },
  {
    name: "Benches in the MHC Botanic Garden",
    latitude: 42.2596,
    longitude: -72.5741,
    description:
      "There are so many birds! This spot on campus offers a lot of privacy and shade and it is a good spot during the early fall and late spring to see lots of flowers and other plants. Lots of good smells as well.",
  },
  {
    name: "Mount Tom",
    latitude: 42.2644,
    longitude: -72.6794,
    description:
      "Has a fire tower! Many cool and old ruins to explore. The hike isn't too bad for inexperienced folks and there are good amounts of shade. It is a moderate out and back hike with about 600 feet of elevation gain.",
  },
  {
    name: "Bare Mountain",
    latitude: 42.2938,
    longitude: -72.5325,
    description:
      "Sunset and sunrise are amazing from this view. The first peak in the seven sisters range and provides access to the rest. No car needed as PVTA goes right to the trailhead, just 10 minutes from campus.",
  },
  {
    name: "Ashley Reservoir",
    latitude: 42.2095,
    longitude: -72.6399,
    description:
      "Beautiful reservoir with trails going through and around it. Dirt and gravel paths, very flat terrain, and a parking lot.",
  },
  {
    name: "Lithia Springs",
    latitude: 42.2632,
    longitude: -72.6208,
    description:
      "An easy walk through the woods to an enchanting pond. The trail is about two miles long with lots of shade. No parking at the trailhead, but nearby parking available.",
  },
  {
    name: "Seven Sisters Range",
    latitude: 42.3091,
    longitude: -72.5269,
    description:
      "Amazing hike for more experienced hikers, but also a challenge for beginners. Bring water as it's a few hours with steep uphill/downhill sections.",
  },
  {
    name: "Mount Holyoke",
    latitude: 42.2956,
    longitude: -72.5769,
    description:
      "Very beautiful with an amazing view house at the top. Accessible by car or by walking a steep paved road or dirt trails.",
  },
  {
    name: "Quabbin Reservoir",
    latitude: 42.3505,
    longitude: -72.3091,
    description:
      "A great place for stargazing due to minimal light pollution. 45-minute drive but very fun and beginner-friendly. Dirt and gravel trails with flat to hilly terrain.",
  },
  {
    name: "Behind Fimbel",
    latitude: 42.2573,
    longitude: -72.5765,
    description:
      "A really big rock people like to sit on, near the carriage trail behind Prospect Hall, which is also very fun to walk. The carriage trail is very steep and rocky.",
  },
  {
    name: "Mount Norwottuck",
    latitude: 42.3247,
    longitude: -72.5029,
    description:
      "Great intro to challenging hikes. The horse caves are interesting to explore. The ranger station at the beginning of the trailhead is also fun to visit. PVTA accessible, 10 minutes from campus.",
  },
  {
    name: "Montague Bookmill",
    latitude: 42.5362,
    longitude: -72.5575,
    description:
      "A huge used bookstore with great cafe vibes. The first floor is ramp accessible, but some ramps are steep. Not PVTA accessible but worth the trip!",
  },
];

const OutdoorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 py-2">
        <Navbar/>        
            
    <CategoryPage
      title="Outdoors"
      description="Ready to explore what's out there?"
      spots={outdoorSpots}
    />
    </div>
  );
};

export default OutdoorPage;
