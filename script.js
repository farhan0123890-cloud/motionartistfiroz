gsap.registerPlugin(ScrollTrigger);

/* HERO SPLIT */
gsap.registerPlugin(ScrollTrigger);

// ONLY run split animation on desktop
if (window.innerWidth > 768) {

  gsap.to(".panel-top", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".panel-bottom", {
    yPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

}

/* ABOUT STRIP SCROLL */
gsap.to(".strip-main .strip-track", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".about-strip",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".strip-vertical .strip-track", {
  xPercent: 50,
  ease: "none",
  scrollTrigger: {
    trigger: ".about-strip",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
})
let menuOpen = false;

const menu = document.querySelector(".menu");
const menuDot = document.querySelector(".menu-dot");
const menuLinks = document.querySelectorAll(".menu-inner a");

menuDot.addEventListener("click", () => {

  if (!menuOpen) {

    gsap.to(menu, {
      y: "0%",
      duration: 0.8,
      ease: "power4.out"
    });

    menuOpen = true;

  } else {

    gsap.to(menu, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.in"
    });

    menuOpen = false;
  }

});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    gsap.to(menu, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.in"
    });
    menuOpen = false;
  });
});
