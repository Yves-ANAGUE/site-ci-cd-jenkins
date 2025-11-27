// GSAP Page Load Animation
window.onload = () => {
  gsap.to(".container", {
    duration: 1.1,
    opacity: 1,
    y: -10,
    ease: "power2.out"
  });
};
