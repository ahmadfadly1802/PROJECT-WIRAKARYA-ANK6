// JS sederhana untuk interaksi
console.log("Website OSIS siap digunakan 🚀");

// Smooth scroll (opsional untuk navigasi dalam halaman)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
