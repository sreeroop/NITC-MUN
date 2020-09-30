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

const sections = document.querySelectorAll("section");

const bubble = document.querySelector(".bubble");

const gradient = [
  "linear-gradient(to bottom, #cbe2f4, #cbe2f4d0)",

  "linear-gradient(to bottom, #154973,#154873)",

  "linear-gradient(to bottom,#79aacb, #79aacbc2 )",
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;

    var activeAnchor = document.querySelector(`[data-page=${className}]`);

    const gradientIndex = entry.target.getAttribute("data-index");

    const coords = activeAnchor.getBoundingClientRect();

    const directions = {
      height: coords.height,

      width: coords.width,

      top: coords.top,

      left: coords.left,
    };

    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);

      bubble.style.setProperty("top", `${directions.top}px`);

      bubble.style.setProperty("width", `${directions.width}px`);

      bubble.style.setProperty("height", `${directions.height}px`);

      bubble.style.background = gradient[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
setTimeout(function () {
  $(".loader-wrapper").fadeOut();
  $("#logo").delay(150).fadeOut("slow");
}, 8000);
