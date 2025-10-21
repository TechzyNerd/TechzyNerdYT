// Simple hover animation or interactive effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.3s ease";
    });
});
