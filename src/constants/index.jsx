import { Monitor, Volume2, Headphones, Move, Wifi, BookOpen } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Monitor />,
    text: "Ultra-Realistic Visuals",
    description:
      "Dive into stunningly lifelike worlds with Virtuo’s ultra-high-definition displays, offering crisp visuals and vibrant colors that bring your virtual adventures to life.",
  },
  {
    icon: <Volume2 />,
    text: "360° Spatial Audio",
    description:
      "Experience sound from every direction with Virtuo’s 360° spatial audio, allowing you to fully immerse yourself in the environment with pinpoint accuracy.",
  },
  {
    icon: <Headphones />,
    text: "Comfort-Focused Design",
    description:
      "Enjoy long gaming sessions with our lightweight, ergonomic design that’s built for comfort, ensuring a perfect fit and minimal strain during extended use.",
  },
  {
    icon: <Move />,
    text: "Advanced Motion Tracking",
    description:
      "Move naturally in your virtual space with Virtuo’s cutting-edge motion tracking technology, offering precise and responsive controls for an intuitive experience.",
  },
  {
    icon: <Wifi />,
    text: "Seamless Connectivity",
    description:
      "Connect effortlessly with your devices through Virtuo’s seamless wireless technology, ensuring smooth, lag-free performance for a truly uninterrupted experience.",
  },
  {
    icon: <BookOpen />,
    text: "Expanded Content Library",
    description:
      "Access a vast library of VR games, apps, and experiences, continuously expanding with the latest content to keep you engaged and entertained.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];


// SliderData export
export const sliderData = [
  {
    image: image1,
    text: "Image 1 Description",
  },
  {
    image: image2,
    text: "Image 2 Description",
  },
  {
    image: image3,
    text: "Image 3 Description",
  },
];
