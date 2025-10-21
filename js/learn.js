// Toggle font size for accessibility
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleFont");
  let big = false;

  toggle.addEventListener("click", () => {
    document.body.style.fontSize = big ? "1rem" : "1.25rem";
    big = !big;
  });
});
