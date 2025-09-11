// Smooth scroll + fade-in animation
document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (href === "#" || href.length < 2) return;

    const targetEl = document.querySelector(href);
    if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });

        // Fade-in animation
        targetEl.classList.add("fade-in-animated");
        setTimeout(() => {
        targetEl.classList.remove("fade-in-animated");
        }, 1000);
    }
});
