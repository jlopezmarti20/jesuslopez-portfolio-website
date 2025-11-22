// src/data/projectsData.js
const projectsData = [
  {
    slug: "moves-app",
    id: "moves",
    title: "Moves App",
    year: "2024",
    description:
      "AI-powered travel experience app that generates personalized trips, playlists, and recommendations.",
    link: "/projects/moves",
  },
  {
    slug: "ios-shpe",
    title: "iOS SHPE UF App",
    year: "2024",
    summary:
      "A community-focused mobile app built using SwiftUI and MongoDB to engage the SHPE UF community.",
    tech: "SwiftUI • MongoDB • iOS",
    image: null, // overridden with Group 2 composite
    link: "/projects/ios-shpe",
  },
  {
    slug: "shpe-data",
    id: "shpe-data",
    title: "SHPE Data Analysis",
    year: "2025",
    description:
      "Designed dashboards, survey analytics, and reporting pipelines for 400+ SHPE UF members as Director of Data Analysis & Insights.",
    // we override the visual with Group 3 in ProjectsSection.jsx
    image: null,
    link: "/projects/shpe-data", // <-- this makes “View Project” show up
  },
  {
    slug: "ml-diabetes",
    title: "ML Diabetes Detection",
    year: "2025",
    description:
      "Analyzed factors influencing diabetes using regression and classification models, including correlation analysis and class imbalance evaluation.",
    link: "/projects/ml-diabetes",
    accentClass: "project-card--ml",
  },
];

export default projectsData;
