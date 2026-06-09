export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-header",
    animation: {
      delay: 200,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-row--headline",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".hero-divider",
    animation: {
      delay: 500,
      distance: "0px",
      scale: 0.9,
      origin: "bottom",
    },
  },
  {
    element: ".hero-row--actions",
    animation: {
      delay: 650,
      origin: "bottom",
    },
  },
  {
    element: ".about-image",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".about-text",
    animation: {
      delay: 500,
      origin: "bottom",
    },
  },
  {
    element: ".skills-showcase",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".project-card",
    animation: {
      delay: 200,
      interval: 150,
      origin: "bottom",
    },
  },
  {
    element: ".contact-panel",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
];
