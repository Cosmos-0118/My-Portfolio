import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { projectsData } from "./data/projectsData";
import { skillsData } from "./data/skillsData";

const renderSkills = () => {
  const skillsHost = document.querySelector("[data-skills]");
  if (!skillsHost) return;

  const fragment = document.createDocumentFragment();

  skillsData.forEach((skillGroup) => {
    const card = document.createElement("article");
    card.className = "skills-card load-hidden";

    const heading = document.createElement("h3");
    heading.className = "skills-card__title";
    heading.textContent = skillGroup.category;

    const badges = document.createElement("ul");
    badges.className = "skills-card__badges";

    if (Array.isArray(skillGroup.items)) {
      skillGroup.items.forEach((item) => {
        const badge = document.createElement("li");
        badge.className = "skills-card__badge";
        badge.textContent = item;
        badges.append(badge);
      });
    }

    const summary = document.createElement("p");
    summary.className = "skills-card__summary";
    summary.textContent = skillGroup.summary;

    card.append(heading, badges, summary);
    fragment.append(card);
  });

  skillsHost.innerHTML = "";
  skillsHost.append(fragment);
};

const renderProjects = () => {
  const projectsHost = document.querySelector("[data-projects]");
  if (!projectsHost) return;

  const fragment = document.createDocumentFragment();

  projectsData.forEach((project) => {
    const row = document.createElement("div");
    row.className = "row";

    const textColumn = document.createElement("div");
    textColumn.className = "col-lg-4 col-sm-12";

    const textWrapper = document.createElement("div");
    textWrapper.className = "project-wrapper__text load-hidden";

    const title = document.createElement("h3");
    title.className = "project-wrapper__text-title";
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "mb-4";
    description.textContent = project.description;

    textWrapper.append(title, description);

    if (Array.isArray(project.stack) && project.stack.length > 0) {
      const stackList = document.createElement("ul");
      stackList.className = "project-wrapper__stack";

      project.stack.forEach((tech) => {
        const stackItem = document.createElement("li");
        stackItem.className = "project-wrapper__stack-item";
        stackItem.textContent = tech;
        stackList.append(stackItem);
      });

      textWrapper.append(stackList);
    }

    if (project.github || project.deployment) {
      const linksWrapper = document.createElement("div");
      linksWrapper.className = "project-wrapper__links";

      if (project.github) {
        const githubLink = document.createElement("a");
        githubLink.className = "cta-btn cta-btn--projects";
        githubLink.href = project.github;
        githubLink.target = "_blank";
        githubLink.rel = "noreferrer";
        githubLink.textContent = "GitHub";
        linksWrapper.append(githubLink);
      }

      if (project.deployment) {
        const deploymentLink = document.createElement("a");
        deploymentLink.className = "cta-btn cta-btn--projects";
        deploymentLink.href = project.deployment;
        deploymentLink.target = "_blank";
        deploymentLink.rel = "noreferrer";
        deploymentLink.textContent = "View Deployment";
        linksWrapper.append(deploymentLink);
      }

      textWrapper.append(linksWrapper);
    }

    textColumn.append(textWrapper);

    const imageColumn = document.createElement("div");
    imageColumn.className = "col-lg-8 col-sm-12";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "project-wrapper__image load-hidden";

    const tiltContainer = document.createElement("div");
    tiltContainer.className = "thumbnail rounded js-tilt";
    tiltContainer.setAttribute("data-tilt", "");
    tiltContainer.setAttribute("data-tilt-max", "4");
    tiltContainer.setAttribute("data-tilt-glare", "true");
    tiltContainer.setAttribute("data-tilt-max-glare", "0.5");

    const image = document.createElement("img");
    image.className = "img-fluid";
    image.src = project.image?.src || "";
    image.alt = project.image?.alt || `${project.title} preview`;
    image.loading = "lazy";
    image.decoding = "async";

    tiltContainer.append(image);
    imageWrapper.append(tiltContainer);
    imageColumn.append(imageWrapper);

    row.append(textColumn, imageColumn);
    fragment.append(row);
  });

  projectsHost.innerHTML = "";
  projectsHost.append(fragment);
};

renderSkills();
renderProjects();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const selector = link.getAttribute("href");
    if (!selector || selector.length <= 1 || !selector.startsWith("#")) return;

    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".site-header__toggle");
const navLinks = siteHeader
  ? siteHeader.querySelectorAll(".site-header__nav a")
  : [];

if (siteHeader) {
  const closeNav = () => {
    siteHeader.classList.remove("site-header--is-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  const openNav = () => {
    siteHeader.classList.add("site-header--is-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "true");
    }
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteHeader.classList.toggle("site-header--is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (siteHeader.classList.contains("site-header--is-open")) {
        closeNav();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.classList.contains("site-header--is-open")) return;
    if (!siteHeader.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      siteHeader.classList.contains("site-header--is-open")
    ) {
      closeNav();
    }
  });

  const setScrollState = () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add("site-header--scrolled");
    } else {
      siteHeader.classList.remove("site-header--scrolled");
    }
  };

  setScrollState();
  window.addEventListener("scroll", setScrollState, { passive: true });
}
