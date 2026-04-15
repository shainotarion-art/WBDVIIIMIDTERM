function showSection(id) {
  let sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(10px)";

    setTimeout(() => {
      sec.classList.add("hidden");
    }, 200);
  });

  let target = document.getElementById(id);

  setTimeout(() => {
    target.classList.remove("hidden");
    target.style.opacity = "1";
    target.style.transform = "translateY(0)";
  }, 250);
}

/* AUTO ANIMATE ON LOAD */
window.onload = () => {
  document.querySelectorAll(".floating-card").forEach((el, i) => {
    el.style.animationDelay = (i * 0.1) + "s";
  });
};