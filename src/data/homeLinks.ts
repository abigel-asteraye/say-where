import {
  FaUtensils,
  FaCoffee,
  FaBook,
  FaTree,
  FaCalendarAlt,
  FaShoppingCart,
} from 'react-icons/fa';
import { FaGem } from 'react-icons/fa6';

export const homeLinks = [
  {
    title: 'Explore outdoors',
    description: 'Get outside and enjoy the sun.',
    href: '/outdoors',
    icon: FaTree,
  },
  {
    title: 'Find Essentials',
    description: 'Find essentials near you.',
    href: '/essentials',
    icon: FaShoppingCart,
  },
  {
    title: 'Eat Local',
    description: 'find your next best meal.',
    href: '/dining',
    icon: FaUtensils,
  },
  {
    title: 'Study Spots',
    description: 'Find your next study spot.',
    href: '/study',
    icon: FaBook,
  },
  {
    title: 'Events',
    description: "Find out what's happening.",
    href: '/events',
    icon: FaCalendarAlt,
  },
  {
    title: 'Hidden Gems',
    description: 'Find your new favorite spot.',
    href: '/gems',
    icon: FaGem,
  },
];
