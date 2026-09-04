/* =====================================================================
   ULTRA-LUXURIOUS ARABIC WEDDING INVITATION — JavaScript Engine
   ===================================================================== */

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

/* =====================================================================
   1. GOLDEN PARTICLE SYSTEM
   ===================================================================== */
let particleCanvas, particleCtx;
let goldParticles = [];
const PARTICLE_COUNT = 55;

class GoldDust {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }
  reset(initial = false) {
    this.x = Math.random() * this.canvas.width;
    this.y = initial
      ? Math.random() * this.canvas.height
      : this.canvas.height + 10;
    this.size = Math.random() * 2.5 + 0.8;
    this.speedY = -(Math.random() * 0.35 + 0.08);
    this.speedX = Math.random() * 0.2 - 0.1;
    this.opacity = Math.random() * 0.6 + 0.15;
    this.fadeDir = Math.random() > 0.5 ? 1 : -1;
    this.fadeSpeed = Math.random() * 0.008 + 0.002;
    this.glow = Math.random() > 0.7;
    const hues = ["#E5C158", "#C5A059", "#D4AF37", "#FFD700", "#F0E68C"];
    this.color = hues[Math.floor(Math.random() * hues.length)];
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.01) * 0.15;
    this.opacity += this.fadeDir * this.fadeSpeed;
    if (this.opacity >= 0.8 || this.opacity <= 0.1) this.fadeDir *= -1;
    if (this.y < -15 || this.x < -15 || this.x > this.canvas.width + 15)
      this.reset();
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    if (this.glow) {
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class BokehCircle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }
  reset(initial = false) {
    this.x = Math.random() * this.canvas.width;
    this.y = initial ? Math.random() * this.canvas.height : -30;
    this.size = Math.random() * 18 + 6;
    this.speedY = Math.random() * 0.15 + 0.03;
    this.speedX = Math.random() * 0.1 - 0.05;
    this.opacity = Math.random() * 0.08 + 0.02;
    this.fadeDir = 1;
    this.fadeSpeed = Math.random() * 0.001 + 0.0005;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.opacity += this.fadeDir * this.fadeSpeed;
    if (this.opacity >= 0.12 || this.opacity <= 0.01) this.fadeDir *= -1;
    if (this.y > this.canvas.height + 30) this.reset();
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size,
    );
    gradient.addColorStop(0, "rgba(229, 193, 88, 0.4)");
    gradient.addColorStop(0.5, "rgba(229, 193, 88, 0.1)");
    gradient.addColorStop(1, "rgba(229, 193, 88, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class RosePetal {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }
  reset(initial = false) {
    this.x = Math.random() * this.canvas.width;
    this.y = initial ? Math.random() * this.canvas.height : -30;
    this.size = Math.random() * 8 + 6;
    this.speedY = Math.random() * 1.0 + 0.3;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 1.5 - 0.75;
    this.opacity = Math.random() * 0.5 + 0.2;
    const colors = ["#F5D5C8", "#FFFDF7", "#FADCD0"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.015) * 0.8;
    this.rotation += this.rotationSpeed;
    if (this.y > this.canvas.height + 30) this.reset();
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(this.size, this.size, -this.size, this.size, 0, 0);
    ctx.fill();
    ctx.restore();
  }
}

function initParticles() {
  particleCanvas = document.getElementById("particles-canvas");
  if (!particleCanvas) return;
  particleCtx = particleCanvas.getContext("2d");
  resizeParticleCanvas();
  for (let i = 0; i < PARTICLE_COUNT * 0.5; i++)
    goldParticles.push(new GoldDust(particleCanvas));
  for (let i = 0; i < PARTICLE_COUNT * 0.2; i++)
    goldParticles.push(new BokehCircle(particleCanvas));
  for (let i = 0; i < PARTICLE_COUNT * 0.3; i++)
    goldParticles.push(new RosePetal(particleCanvas));
  window.addEventListener("resize", resizeParticleCanvas);
  animateParticles();
}

function resizeParticleCanvas() {
  if (!particleCanvas) return;
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function animateParticles() {
  if (!particleCtx || !particleCanvas) return;
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  goldParticles.forEach((p) => {
    p.update();
    p.draw(particleCtx);
  });
  requestAnimationFrame(animateParticles);
}

/* =====================================================================
   2. GSAP FULLSCREEN ENVELOPE OPENING
   ===================================================================== */
let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  startBackgroundMusic();

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    onComplete: () => {
      // Remove envelope from DOM flow
      const screen = document.getElementById("envelope-screen");
      if (screen) {
        screen.style.display = "none";
      }
      // Show audio toggle
      const audioBtn = document.getElementById("audio-toggle");
      if (audioBtn) audioBtn.classList.add("visible");
    },
  });

  // Step 1: Seal glow appears
  tl.to(".seal-glow", {
    opacity: 1,
    scale: 1.8,
    duration: 0.5,
    ease: "power2.out",
  })

    // Step 2: Seal cracks and explodes outward
    .to(
      ".seal-body",
      {
        scale: 1.5,
        opacity: 0,
        rotation: 20,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      ".seal-glow",
      {
        scale: 4,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5",
    )

    // Step 3: Prompt and decorative text fade out
    .to(
      [".open-prompt", ".env-top-text", ".env-bottom-text"],
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.6",
    )

    // Step 4: Top flap opens upward with 3D rotation
    .to(
      ".env-flap",
      {
        rotateX: -180,
        duration: 1.2,
        ease: "power3.inOut",
        transformOrigin: "top center",
        onStart: fireGoldConfetti,
      },
      "-=0.3",
    )

    // Step 5: Gold corner accents fade
    .to(
      ".env-corner",
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      },
      "-=0.6",
    )

    // Step 6: Entire envelope screen slides UP and fades out
    .to(
      "#envelope-screen",
      {
        y: "-100%",
        opacity: 0,
        duration: 1.0,
        ease: "power3.inOut",
      },
      "-=0.4",
    )

    // Step 7: Invitation page fades in
    .call(
      () => {
        const invPage = document.getElementById("invitation-page");
        if (invPage) {
          invPage.classList.add("visible");
          window.scrollTo(0, 0);
        }
      },
      null,
      "-=0.6",
    )

    .fromTo(
      "#invitation-page",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
        onComplete: () => {
          // Initialize scroll animations after fade-in
          setTimeout(initScrollAnimations, 200);
        },
      },
      "-=0.6",
    )

    // Fade in floral corners together with the page
    .to(
      ".floral-corner",
      {
        opacity: 1,
        duration: 1.6,
        ease: "power2.out",
      },
      "<",
    ); // '<' means same start time as page fade
}

/* =====================================================================
   3. GOLD CONFETTI BURST
   ===================================================================== */
function fireGoldConfetti() {
  if (typeof confetti === "undefined") return;

  const duration = 2500;
  const end = Date.now() + duration;
  const goldColors = [
    "#C5A059",
    "#E5C158",
    "#D4AF37",
    "#FFD700",
    "#BF953F",
    "#FBF5B7",
  ];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: goldColors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
      drift: 0.5,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: goldColors,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
      drift: -0.5,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: goldColors,
      ticks: 300,
      gravity: 0.6,
      scalar: 1.5,
      shapes: ["circle"],
    });
  }, 300);
}

/* =====================================================================
   4. SCROLL REVEAL ANIMATIONS
   ===================================================================== */
function initScrollAnimations() {
  const sections = document.querySelectorAll(".inv-section");
  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      },
    );
  });

  document.querySelectorAll(".ornamental-divider").forEach((div) => {
    gsap.fromTo(
      div,
      { opacity: 0, scaleX: 0 },
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: div, start: "top 90%", once: true },
      },
    );
  });
}

/* =====================================================================
   5. PARALLAX TILT
   ===================================================================== */
function initParallaxTilt() {
  const tiltElements = document.querySelectorAll(".tilt-element");
  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform =
        "perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)";
    });
  });

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      const tiltX = (e.gamma || 0) * 0.15;
      const tiltY = (e.beta || 0) * 0.1;
      tiltElements.forEach((el) => {
        el.style.transform = `perspective(800px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      });
    });
  }
}

/* =====================================================================
   6. QR CODE
   ===================================================================== */
function initQRCode() {
  const qrContainer = document.getElementById("qr-code");
  if (
    !qrContainer ||
    qrContainer.querySelector("img") ||
    typeof QRCode === "undefined"
  )
    return;
  new QRCode(qrContainer, {
    text: "https://maps.app.goo.gl/8iYHdRk8w2n56j8Z6",
    width: 150,
    height: 150,
    colorDark: "#36261C",
    colorLight: "#FFFDF7",
    correctLevel: QRCode.CorrectLevel.M,
  });
}

/* =====================================================================
   8. COUNTDOWN TIMER
   ===================================================================== */
const WEDDING_DATE = new Date("2027-03-27T15:00:00+01:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = WEDDING_DATE - now;
  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const minutes = Math.max(
    0,
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  );
  const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  const dEl = document.getElementById("cd-days");
  const hEl = document.getElementById("cd-hours");
  const mEl = document.getElementById("cd-minutes");
  const sEl = document.getElementById("cd-seconds");

  if (dEl) dEl.textContent = days.toString().padStart(2, "0");
  if (hEl) hEl.textContent = hours.toString().padStart(2, "0");
  if (mEl) mEl.textContent = minutes.toString().padStart(2, "0");
  if (sEl) {
    sEl.textContent = seconds.toString().padStart(2, "0");
    sEl.style.transform = "scale(1.1)";
    setTimeout(() => {
      sEl.style.transform = "scale(1)";
    }, 150);
  }
}

/* =====================================================================
   9. AUDIO TOGGLE
   ===================================================================== */
let isMuted = true;

function startBackgroundMusic() {
  const audio = document.getElementById("bg-music");
  const audioBtn = document.getElementById("audio-toggle");
  if (!audio) return false;

  audio.muted = false;
  audio.volume = 0.35;

  const start = () => {
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          isMuted = false;
          if (audioBtn) audioBtn.classList.remove("muted");
          return true;
        })
        .catch(() => {
          isMuted = true;
          if (audioBtn) audioBtn.classList.add("muted");
          return false;
        });
      return playPromise;
    }

    isMuted = false;
    if (audioBtn) audioBtn.classList.remove("muted");
    return true;
  };

  return start();
}

function initAudioToggle() {
  const toggle = document.getElementById("audio-toggle");
  const audio = document.getElementById("bg-music");
  if (!toggle || !audio) return;
  toggle.addEventListener("click", () => {
    isMuted = !isMuted;
    if (isMuted) {
      audio.pause();
      toggle.classList.add("muted");
    } else {
      startBackgroundMusic();
      toggle.classList.remove("muted");
    }
  });
}

/* =====================================================================
   10. INIT
   ===================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  initParticles();

  const envelopeScreen = document.getElementById("envelope-screen");
  if (envelopeScreen) {
    envelopeScreen.addEventListener("click", openEnvelope);
  }

  initQRCode();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initParallaxTilt();
  initAudioToggle();

  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.muted = false;
    audio.volume = 0.35;
  }
});

window.openEnvelope = openEnvelope;
window.initQRCode = initQRCode;
