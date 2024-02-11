gsap.registerPlugin(ScrollTrigger);

gsap.to(".field1", {
  scrollTrigger: {
    trigger: ".field1",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    pin: '.a',
    pinSpacing: false,
  },
});

gsap.to(".field1", {
  scrollTrigger: {
    y: 100,
    trigger: ".field1",
    markers: true,
    start: "+=450px top",
    end: "bottom bottom",
    pin: '.b',
    pinSpacing: false,
  },
});
gsap.to(".field1", {
  scrollTrigger: {
    y: 100,
    trigger: ".field1",
    markers: true,
    start: "+=900px top",
    end: "bottom bottom",
    pin: '.c',
    pinSpacing: false,
  },
});
