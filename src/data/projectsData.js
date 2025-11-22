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
    image: null, // we override this with Group 2 composite
    link: "/projects/ios-shpe",
  },
  {
    id: "group1",
    title: "Group Project 1",
    year: "2023",
    description:
      "First group project for DIG3588, focused on learning the full process from concept to delivery.",
    image: "/assets/group1_mock.png",
    link: "/projects/group-1",
    accentClass: "project-accent-purple",
  },
  {
    id: "group2",
    title: "Group Project 2",
    year: "2023",
    description:
      "Second group assignment for DIG3588, focusing on stronger visuals and more refined UX/UI.",
    image: "/assets/group2_mock.png",
    link: "/projects/group-2",
    accentClass: "project-accent-green",
  },
];

export default projectsData;
