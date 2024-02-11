gsap.registerPlugin(ScrollTrigger);

gsap.to(".field2", {
  duration: 2,
  backgroundColor: "#fff",
  color:"#000",
  scrollTrigger: {
    trigger: ".field2",
    start: "top 0",
    end: "bottom 0",
    markers: true,
    toggleClass: "active",
    pin: true,
    scrub: true,
  },
  ScrollSmoother: {
    smooth: 2,
    effects: true,
    normalizeScroll: true,
  },
});
