import { StarCardModel } from "../components/StarCard";

// Asset Imports
import dada from "../assets/images/dada.jpg";
import aboutMd from "../assets/md/aboutMe.md";
import aboutSite from "../assets/md/aboutSite.md";

// this defines the star cards, they are rendered in order.
export const StarCardData: StarCardModel[] = [
  // {
  //   title: "About Me",
  //   subtitle: "What I do and who I am.",
  //   tag: "fluff",
  //   src: dada,
  //   href: "/about-me",
  //   bodyMd: aboutMd,
  // },
  {
    title: "Mystery Juice",
    subtitle: "Reference guide for DIY E-Liquids.",
    tag: "projects",
    src: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://mysteryjuice.vercel.app/",
  },
  {
    title: "Spline + Next.js Demo",
    subtitle: "Playground for 3D Embeds via Spline.",
    tag: "projects",
    src: "https://i.imgur.com/zWBS2UI.jpeg",
    href: "https://spline-3d-performance.vercel.app/",
  },
  {
    title: "Environment, Ego & Autonomy",
    subtitle: "Enrich your team by understanding what makes them tick.",
    tag: "articles",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://medium.com/@dec.keighley/environment-ego-and-autonomy-d8283fdee56b",
  },
  {
    title: "Gamified Task Tracker",
    subtitle: "Watch this space. News coming soon.",
    tag: "projects",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    title: "About This Site",
    subtitle: "Whats going on under the hood?",
    tag: "fluff",
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/about-site",
    bodyMd: aboutSite,
  },
];
