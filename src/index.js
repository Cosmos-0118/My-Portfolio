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
    card.className = "skill-card glass-panel load-hidden";

    const heading = document.createElement("h3");
    heading.className = "skill-card__title";
    heading.textContent = skillGroup.category;

    const summary = document.createElement("p");
    summary.className = "skill-card__summary";
    summary.textContent = skillGroup.summary;

    const badges = document.createElement("ul");
    badges.className = "skill-card__badges";

    if (Array.isArray(skillGroup.items)) {
      skillGroup.items.forEach((item) => {
        const badge = document.createElement("li");
        badge.className = "skill-badge";
        badge.textContent = item;
        badges.append(badge);
      });
    }

    card.append(heading, summary, badges);
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
    const card = document.createElement("article");
    card.className = "project-card glass-panel load-hidden";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "project-card__image-wrapper js-tilt";
    imageWrapper.setAttribute("data-tilt", "");
    imageWrapper.setAttribute("data-tilt-max", "3");
    imageWrapper.setAttribute("data-tilt-glare", "true");
    imageWrapper.setAttribute("data-tilt-max-glare", "0.3");

    const image = document.createElement("img");
    image.className = "project-card__image";
    image.src = project.image?.src || "";
    image.alt = project.image?.alt || `${project.title} preview`;
    image.loading = "lazy";
    image.decoding = "async";

    imageWrapper.append(image);

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "project-card__content";

    const title = document.createElement("h3");
    title.className = "project-card__title text-gradient";
    title.textContent = project.title;

    const description = document.createElement("p");
    description.className = "project-card__description";
    description.textContent = project.description;

    contentWrapper.append(title, description);

    if (Array.isArray(project.stack) && project.stack.length > 0) {
      const stackList = document.createElement("ul");
      stackList.className = "project-card__stack";

      project.stack.forEach((tech) => {
        const stackItem = document.createElement("li");
        stackItem.className = "stack-badge";
        stackItem.textContent = tech;
        stackList.append(stackItem);
      });

      contentWrapper.append(stackList);
    }

    if (project.github || project.deployment) {
      const linksWrapper = document.createElement("div");
      linksWrapper.className = "project-card__links";

      if (project.github) {
        const githubLink = document.createElement("a");
        githubLink.className = "btn btn-outline";
        githubLink.href = project.github;
        githubLink.target = "_blank";
        githubLink.rel = "noreferrer";
        githubLink.innerHTML = `<i class="fa fa-github"></i> Code`;
        linksWrapper.append(githubLink);
      }

      if (project.deployment) {
        const deploymentLink = document.createElement("a");
        deploymentLink.className = "btn btn-primary";
        deploymentLink.href = project.deployment;
        deploymentLink.target = "_blank";
        deploymentLink.rel = "noreferrer";
        deploymentLink.innerHTML = `<i class="fa fa-external-link"></i> Live App`;
        linksWrapper.append(deploymentLink);
      }

      contentWrapper.append(linksWrapper);
    }

    card.append(imageWrapper, contentWrapper);
    fragment.append(card);
  });

  projectsHost.innerHTML = "";
  projectsHost.append(fragment);
};

renderSkills();
renderProjects();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Smooth scrolling
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

// Mobile Nav
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".site-header__toggle");
const navLinks = siteHeader ? siteHeader.querySelectorAll(".site-header__nav a") : [];

if (siteHeader) {
  const closeNav = () => {
    siteHeader.classList.remove("site-header--is-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
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
    if (event.key === "Escape" && siteHeader.classList.contains("site-header--is-open")) {
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
