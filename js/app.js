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
  { duration: 3, opacity: 1, delay: 5 }
);
/*
let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: "section",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=700", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});
*/
