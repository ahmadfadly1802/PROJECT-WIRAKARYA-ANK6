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

// Animasi toast feedback login
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('loginForm');
        const toast = document.getElementById('login-toast');
        const toastMsg = document.getElementById('login-toast-msg');
        const iconSuccess = toast.querySelector('.icon-success');
        const iconError = toast.querySelector('.icon-error');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Demo: username=admin, password=admin123 dianggap benar
            const user = form.username.value.trim();
            const pass = form.password.value.trim();

            if (!user || !pass) {
                showToast("Username dan password wajib diisi.", true);
                return;
            }
            if (user === "admin" && pass === "admin123") {
                showToast("Login berhasil! Selamat datang 😊", false);
                // Simulasi redirect setelah login sukses
                setTimeout(() => { window.location.href = "dashboard.html"; }, 1800);
            } else {
                showToast("Username atau password salah.", true);
            }
        });

        function showToast(msg, isError) {
            toastMsg.textContent = msg;
            toast.style.display = "flex";
            if (isError) {
                toast.classList.add('error');
                iconError.style.display = "inline";
                iconSuccess.style.display = "none";
            } else {
                toast.classList.remove('error');
                iconError.style.display = "none";
                iconSuccess.style.display = "inline";
            }
            setTimeout(() => { toast.classList.add('show'); }, 10);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.style.display = "none";
                }, 400);
            }, 2300);
        }
    });
