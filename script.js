window.addEventListener("scroll", () => {
  const env = document.getElementById("env");

  if (window.scrollY > 150) {
    env.classList.add("flip");
  } else {
    env.classList.remove("flip");
  }
});
