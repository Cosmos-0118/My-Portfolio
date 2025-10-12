// Keep image sources as paths relative to this data module; the renderer will
// resolve them to absolute URLs to avoid document-relative path issues.
const campusCollabImage = "../assets/project.jpg";

export const projectsData = [
  {
    title: "CampusCollab",
    description:
      "A Java Swing collaboration platform that lets classmates form project groups, assign responsibilities, and track milestones with a shared dashboard.",
    stack: ["Java", "Swing", "MySQL"],
    image: {
      src: campusCollabImage,
      alt: "CampusCollab dashboard screenshot",
    },
  },
];
