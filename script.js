// Function to apply the saved theme
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Dark Mode Toggle with Persistence
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Apply the saved theme when the page loads
applySavedTheme();
// Highlight Active Section in Navbar
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function highlightSection() {
        let scrollPos = window.scrollY + 150; // Increased offset for better detection

        sections.forEach((section, index) => {
            let id = section.getAttribute("id");
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (
                scrollPos >= sectionTop &&
                scrollPos < sectionTop + sectionHeight
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }

            // Ensure the last section is properly highlighted when scrolled to the bottom
            if (index === sections.length - 1 && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector('.navbar a[href="#contact"]').classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightSection);
});
