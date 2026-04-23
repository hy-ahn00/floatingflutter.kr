window.addEventListener("load", () => {
  const paper = document.getElementById("paper");

  setTimeout(() => {
    paper.classList.add("show");
  }, 300);
});

window.addEventListener("scroll", () => {
  const env = document.getElementById("env");

  if (window.scrollY > 200) {
    env.classList.add("flip");
  } else {
    env.classList.remove("flip");
  }
});
