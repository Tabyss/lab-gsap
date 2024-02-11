gsap.from(".clip-top, .clip-bottom", 2, {
  delay: 1,
  height: "50vh",
  ease: "power4.inOut",
});

gsap.to(".marque", 2.5, {
  delay: 0.75,
  top: "30%",
  ease: "power4.inOut",
});

gsap.from(".clip-top .marque, .clip-bottom .marque", 5, {
  delay: 1,
  left: "100%",
  ease: "power4.inOut",
});

gsap.from(".clip-center .marque", 5, {
  delay: 1,
  left: "-100%",
  ease: "power4.inOut",
});

gsap.to(".clip-top", 2, {
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut",
});

gsap.to(".clip-bottom", 2, {
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut",
});

gsap.to(
  ".clip-top .marque, .clip-bottom .marque, .clip-center .marque span",
  1,
  {
    delay: 6,
    opacity: 0,
    ease: "power4.inOut"
  }
);
