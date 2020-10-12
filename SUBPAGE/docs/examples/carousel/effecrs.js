const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  navLinks.style.setProperty("overflow", `${hidden}`);

  /* links.forEach((links) => {
      links.classList.toggle("fade");
    }); */
});
