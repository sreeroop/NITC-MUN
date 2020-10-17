gsap.registerPlugin(ScrollTrigger);

gsap.to(".what-heading", {
  scrollTrigger: ".whatContent",
  start: "top center",
  opacity: 1,
  duration: 3,
});
gsap.to(".why-heading", {
  scrollTrigger: ".whyContent",
  start: "top center",
  opacity: 1,
  duration: 3,
});
gsap.to(".who-heading", {
  scrollTrigger: ".whoContent",
  start: "top center",
  opacity: 1,
  duration: 3,
});

gsap.fromTo(
  ".nav ul li",
  { y: -5 },
  { duration: 2, y: 5, delay: 1, stagger: 0.5, repeat: -1, yoyo: true }
);
gsap.fromTo(
  ".MUNlogo,.landing-img",
  { opacity: 0.3 },
  { duration: 3, opacity: 1, delay: 8 }
);
