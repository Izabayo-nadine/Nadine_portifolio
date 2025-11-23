(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Animated gradient-mesh style background using Canvas
  const canvas = document.getElementById("bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0,
    height = 0,
    deviceRatio = window.devicePixelRatio || 1;

  const nodes = new Array(8).fill(0).map((_, i) => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() * 2 - 1) * 0.12,
    vy: (Math.random() * 2 - 1) * 0.12,
    r: 120 + Math.random() * 180,
    colorStops:
      i % 3 === 0
        ? ["#ff4ecd", "#ffd166"]
        : i % 3 === 1
        ? ["#7cffe3", "#00e7c1"]
        : ["#7a5cff", "#ff4ecd"],
  }));

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * deviceRatio);
    canvas.height = Math.floor(height * deviceRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  function step(dt) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#07061a";
    ctx.fillRect(0, 0, width, height);

    nodes.forEach((n) => {
      n.x += n.vx * dt * 0.001;
      n.y += n.vy * dt * 0.001;
      if (n.x < -0.2 || n.x > 1.2) n.vx *= -1;
      if (n.y < -0.2 || n.y > 1.2) n.vy *= -1;
      const cx = n.x * width;
      const cy = n.y * height;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, n.r);
      g.addColorStop(0, hexToRgba(n.colorStops[0], 0.85));
      g.addColorStop(1, hexToRgba(n.colorStops[1], 0));
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, n.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  let last = performance.now();
  function animate(now) {
    const dt = Math.min(50, now - last);
    last = now;
    step(dt);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    },
    { threshold: 0.12 }
  );
  Array.from(document.querySelectorAll(".section, .card")).forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // Subtle tilt on cards
  Array.from(document.querySelectorAll(".card")).forEach((card) => {
    let rect;
    card.addEventListener("mousemove", (e) => {
      rect = rect || card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(
        x * 6
      ).toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      rect = undefined;
    });
  });

  function hexToRgba(hex, a) {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
})();
