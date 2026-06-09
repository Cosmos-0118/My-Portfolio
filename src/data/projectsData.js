const credentiaImage = new URL("../assets/Credentia-app.png", import.meta.url).href;
const uniSlotImage = new URL("../assets/Uni-slot.png", import.meta.url).href;
const compusImage = new URL("../assets/Compus-web.png", import.meta.url).href;
const queryCraftImage = new URL("../assets/Query-craft.png", import.meta.url).href;
const campusCollabImage = new URL("../assets/project.png", import.meta.url).href;

export const projectsData = [
  {
    title: "Credentia",
    description:
      "A full-stack college management platform for students, faculty, and placement teams. It covers credential and achievement tracking, dynamic forms, live face-based attendance, placement applications with AI resume review, and real-time notifications — built for SRM University.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "NextAuth.js",
      "AWS",
    ],
    image: {
      src: credentiaImage,
      alt: "Credentia college management dashboard showing student profile, achievements, and faculty verification workflow",
    },
    github: "https://github.com/Cosmos-0118/Credentia",
    deployment: "https://credentia.app",
  },
  {
    title: "UniSlot",
    description:
      "Browser app that schedules evening courses from Excel enrollments entirely client-side, with clash detection and downloadable timetable workbooks.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Web Workers",
      "ExcelJS",
    ],
    image: {
      src: uniSlotImage,
      alt: "UniSlot scheduler dashboard showing an uploaded enrollment workbook, timetable preview, and Excel export options running in the browser.",
    },
    github: "https://github.com/Cosmos-0118/UniSlot",
    deployment: "https://uni-slot-three.vercel.app",
  },
  {
    title: "Compus",
    description:
      "A faculty–HOD appointment platform for SRMIST that replaces ad-hoc scheduling with priority-based matching, real-time slot locking, and automatic queue handling. HODs publish availability, faculty submit meeting requests with urgency, and the system resolves conflicts, syncs calendars, and notifies both sides when schedules change.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "NextAuth.js",
      "Google Calendar API",
    ],
    image: {
      src: compusImage,
      alt: "Compus appointment dashboard showing HOD availability blocks, faculty meeting requests, and priority-based scheduling queue",
    },
    github: "https://github.com/HARIHARAN-38/Compus",
    deployment: "https://compusweb.app",
  },
  {
    title: "QueryCraft",
    description:
      "A browser-first database learning studio that combines SQL sandboxing, relational algebra, tuple calculus, ER modeling, normalization, and synthetic data generation in one workspace. SQL runs locally via WASM SQLite with per-account state isolation, step-by-step algebra evaluation, ER-to-relational conversion, and a searchable DBMS reference.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "sql.js",
      "CodeMirror",
      "React Flow",
      "PostgreSQL",
    ],
    image: {
      src: queryCraftImage,
      alt: "QueryCraft SQL sandbox showing an in-browser query editor, schema browser, and step-by-step relational algebra evaluation panel",
    },
    github: "https://github.com/Cosmos-0118/QueryCraft",
    deployment: "https://www.querycraft.xyz",
  },
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
