gsap.registerPlugin(ScrollTrigger);

const nameElement = document.querySelector("h1");
const nameText = nameElement.textContent;
nameElement.textContent = "";

gsap.to(
  {},
  {
    delay: 1,
    duration: 0.2,
    onComplete: () => {
      let index = 0;
      const interval = setInterval(() => {
        nameElement.textContent = nameText.slice(0, index);
        index++;

        if (index > nameText.length) clearInterval(interval);
      }, 60);
    },
  }
);

gsap.utils.toArray("section label").forEach((label) => {
  gsap.from(label, {
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: label,
      start: "top 90%",
    },
  });
});

gsap.from("header div", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.15,
  ease: "power2.out",
});

gsap.from(".hero img", {
  delay: 1,
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero h2", {
  delay: 2,
  opacity: 0,
  x: -40,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 75%",
  },
});

gsap.from("section:nth-of-type(1) p", {
  delay: 2.5,
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "section:nth-of-type(1)",
    start: "top 80%",
  },
});

gsap.from(".skill-item", {
  delay: 3,
  opacity: 0,
  scale: 0.7,
  duration: 0.4,
  stagger: 0.05,
  ease: "back.out(1.8)",
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 85%",
  },
});

gsap.from(".exp-item", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".experience",
    start: "top 85%",
  },
});

gsap.from(".project", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".projects",
    start: "top 85%",
  },
});

gsap.from("footer", {
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
  },
});
