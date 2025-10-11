import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const heroCtaLink = document.querySelector('.cta-btn--hero[href^="#"]');

if (heroCtaLink) {
  heroCtaLink.addEventListener("click", (event) => {
    const selector = heroCtaLink.getAttribute("href");
    if (!selector) return;

    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
