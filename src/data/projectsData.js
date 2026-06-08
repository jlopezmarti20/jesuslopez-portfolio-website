// src/data/projectsData.js
const projectsData = [
  {
    slug: "gatormind",
    id: "gatormind",
    title: "GatorMind",
    year: "2026",
    description:
      "A neural network interpretability dashboard built as a senior capstone, enabling real-time visualization of how a model processes and clusters 200k+ facial image embeddings.",
    tech: "FastAPI • React • MongoDB • ONNX Runtime",
    image: null,
  },
  {
    slug: "shpe-data",
    id: "shpe-data",
    title: "SHPE Data Analysis",
    year: "2025",
    description:
      "Designed dashboards, survey analytics, and reporting pipelines for 400+ SHPE UF members as Director of Data Analysis & Insights.",
    image: null,
    link: "/projects/shpe-data",
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
  {
    slug: "moves-app",
    id: "moves",
    title: "Moves App",
    year: "2024",
    description:
      "A swipe-based location discovery app where users match with nearby places based on their current mood, built with ReactJS, Django REST, and MySQL.",
    link: "/projects/moves",
  },
  {
    slug: "ios-shpe",
    title: "iOS SHPE UF App",
    year: "2024",
    summary:
      "A production-ready iOS app built with Swift for 300+ SHPE UF members to track events, announcements, and SHPEitos points in real time.",
    tech: "SwiftUI • MongoDB • iOS",
    image: null,
    link: "/projects/ios-shpe",
  },
];

export default projectsData;
