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

// Animasi sukses submit aspirasi
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.aspiration-form');
    const toast = document.getElementById('success-toast');
    if (form && toast) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Reset form (opsional)
            form.reset();

            // Tampilkan notifikasi sukses
            toast.style.display = "flex";
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);

            // Hilangkan toast setelah 3 detik
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.style.display = "none";
                }, 400);
            }, 3000);
        });
    }
});
