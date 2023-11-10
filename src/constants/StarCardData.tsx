import { StarCardProps } from "../components/StarCard";

// Asset Imports
import dada from "../assets/images/dada.jpg";
import aboutMd from "../assets/md/about.md";

// this defines the star cards, they are rendered in order.
export const StarCardData: StarCardProps[] = [
  {
    title: "About Me",
    subtitle: "What I do and who I am.",
    tag: "fluff",
    src: dada,
    href: "/about-me",
    bodyMd: aboutMd,
  },
  {
    title: "Mystery Juice",
    subtitle: "Reference guide for DIY E-Liquids.",
    tag: "projects",
    src: "https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://mysteryjuice.vercel.app/",
  },
  {
    title: "Environment, Ego & Autonomy",
    subtitle: "Article about enriching development teams.",
    tag: "articles",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://medium.com/@dec.keighley/environment-ego-and-autonomy-d8283fdee56b",
  },
  {
    title: "Gamified Task Tracker",
    subtitle: "More info coming soon.",
    tag: "projects",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
  {
    title: "About This Site",
    subtitle: "How did the sausage get made?",
    tag: "fluff",
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/",
  },
];
