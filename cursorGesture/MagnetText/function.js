function magnetButton() {
  var magnets = document.querySelectorAll(".magnet");
  var text = document.querySelectorAll(".text");
  var strength = 100;

  if (window.innerWidth > 540) {
    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseleave", function (event) {
        gsap.to(event.currentTarget, 1.5, {
          x: 0,
          y: 0,
          ease: "Elastic.easeOut",
        });
        gsap.to(text, 1.5, {
          x: 0,
          y: 0,
          ease: "Elastic.easeOut",
        });
      });
    });

    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();
      var magnetsStrength = magnetButton.getAttribute("data-magnet");
      var magnetsStrengthText = magnetButton.getAttribute("data-magnet-inner");

      gsap.to(magnetButton, 1.5, {
        x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * magnetsStrength,
        y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *magnetsStrength,
        ease: "Power4.easeOut",
      });
      gsap.to(text, 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrengthText,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrengthText,
        ease: "Power4.easeOut",
      });
    }
  }
}

magnetButton();
