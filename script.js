// Change navbar color on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#141414";
  } else {
    navbar.style.backgroundColor = "rgba(20, 20, 20, 0.9)";
  }
});

// Play button
document.querySelector(".btn-play").addEventListener("click", () => {
  alert("Playing Stranger Things...");
});

// Info button
document.querySelector(".btn-info").addEventListener("click", () => {
  alert("More info about Stranger Things...");
});
