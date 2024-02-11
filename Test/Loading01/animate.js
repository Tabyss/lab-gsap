function loader() {
  let element = document.querySelector(".count p");
  let value = 0;

  function update() {
    if (value < 100) {
      let increment = Math.floor(Math.random() * 10) + 1;
      value = Math.min(value + increment, 100);
      element.textContent = value;

      let delay = Math.floor(Math.random() * 200) + 25;
      setTimeout(update, delay);
    }
  }
  update();
}

loader();

gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

let textWarp = document.querySelector(".ml16");
textWarp.innerHTML = textWarp.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml16 .letter",
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 30 * i,
  })
  .add({
    targets: ".ml16 .letter",
    translateY: [0, 100],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 2000 + 30 * i,
  });

gsap.to(".pre-loader", {
  scale: 0.5,
  ease: "power4.inOut",
  duration: 2,
  delay: 3,
});

gsap.to(".loader", {
  height: "0",
  ease: "power4.inOut",
  duration: 1.5,
  delay: 3.75,
});

gsap.to(".loader-bg", {
  height: "0",
  ease: "power4.inOut",
  duration: 1.5,
  delay: 4,
});

gsap.to(".loader-2",{
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.5
})

gsap.from(".header h1", {
    opacity: 0,
    y: 200,
    ease: "power4.inOut",
    duration:1.5,
    delay: 3.75,
    stagger: 0.05
})

gsap.to(".img", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.5,
    stagger: 0.25
})
