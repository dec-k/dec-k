import React from "react";

export const trans = {
  head: { title: "Dec // K", subtitle: "senior Web developer" },
  links: [
    {
      title: `🍊 Mystery Juice`,
      href: "https://themysteryjuice.com",
      emphasise: true,
    },
    {
      title: "🟣 Github",
      href: "https://github.com/dec-k",
      emphasise: false,
    },
    {
      title: `🔵 LinkedIn`,
      href: "https://www.linkedin.com/in/declan-keighley-b19265a6/",
      emphasise: false,
    },
    {
      title: `✉️ dec.keighley@gmail.com`,
      href: "mailto:dec.keighley@gmail.com",
      emphasise: false,
    },
  ],
  body: {
    about: {
      title: "About",
      preamble:
        "I'm a senior developer based in Christchurch, New Zealand. I like messing around with new and shiny things - expect the site to change rather often!",
      builtWith: [
        "This site is currently built with:",
        "- React.JS",
        "- Chakra UI",
        "- react-three-fiber",
        "- Spline",
      ],
    },
  },
  projects: {
    title: "project",
    data: [
      {
        title: "Mystery juice 🍊",
        about:
          "Mystery Juice is an informational site aimed at informing & teaching people about DIY e-juice. It was created out of a frustration with rising prices and dodgey retailer practices in the industry. It is built utilising serverside rendering via next.js and MUI.",
      },
    ],
  },
  articles: {
    title: "article",
    data: [
      {
        title: "environment, ego, and autonomy",
        about:
          "A short article about my career history where I discuss attributes of what makes a good or bad workplaces, and my values for training and growing new developers.",
        href: "https://medium.com/@dec.keighley/environment-ego-and-autonomy-d8283fdee56b",
      },
    ],
  },
};
