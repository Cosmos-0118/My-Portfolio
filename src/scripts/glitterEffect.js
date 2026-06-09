const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const createParticle = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * 1.8 + 0.6,
  alpha: Math.random() * 0.5 + 0.15,
  alphaSpeed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
  driftX: (Math.random() - 0.5) * 0.12,
  driftY: (Math.random() - 0.5) * 0.08,
  hue: Math.random() > 0.55 ? 280 : 330,
});

const initGlitterEffect = () => {
  if (prefersReducedMotion()) return null;

  const canvas = document.createElement("canvas");
  canvas.className = "glitter-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
  if (!ctx) return null;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let animationId = 0;
  let isVisible = !document.hidden;

  const particleCount = () =>
    Math.min(90, Math.max(36, Math.floor((width * height) / 22000)));

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = particleCount();
    particles = Array.from({ length: count }, () => createParticle(width, height));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];

      p.alpha += p.alphaSpeed;
      if (p.alpha <= 0.08 || p.alpha >= 0.75) {
        p.alphaSpeed *= -1;
      }

      p.x += p.driftX;
      p.y += p.driftY;

      if (p.x < -8) p.x = width + 8;
      if (p.x > width + 8) p.x = -8;
      if (p.y < -8) p.y = height + 8;
      if (p.y > height + 8) p.y = -8;

      const glow = p.size * 2.4;
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
      gradient.addColorStop(0, `hsla(${p.hue}, 85%, 78%, ${p.alpha})`);
      gradient.addColorStop(0.45, `hsla(${p.hue}, 80%, 70%, ${p.alpha * 0.35})`);
      gradient.addColorStop(1, `hsla(${p.hue}, 80%, 70%, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `hsla(${p.hue}, 90%, 92%, ${Math.min(p.alpha + 0.2, 1)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const tick = () => {
    if (isVisible) {
      draw();
    }
    animationId = window.requestAnimationFrame(tick);
  };

  const onVisibilityChange = () => {
    isVisible = !document.hidden;
  };

  resize();
  tick();

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  return () => {
    window.cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    canvas.remove();
  };
};

export default initGlitterEffect;
