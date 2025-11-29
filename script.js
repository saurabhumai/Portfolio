// Responsive Navbar - Hamburger Toggle 
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active");
            hamburger.classList.toggle("is-active");
        });
    }

    // Animate statistics counters (on homepage/index.html)
    const counters = document.querySelectorAll(".stat[data-target]");
    if (counters.length > 0) {
        counters.forEach(counter => {
            counter.innerText = "0";
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                let count = +counter.innerText;
                const speed = 50; // lower is faster

                if (count < target) {
                    counter.innerText = Math.ceil(count + (target/20));
                    setTimeout(updateCount, speed);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
});