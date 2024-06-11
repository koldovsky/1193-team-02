document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".footer__social-link img");

    socialLinks.forEach((link) => {
        link.addEventListener("mouseover", function () {
            const hoverSrc = link.getAttribute("data-hover");
            link.setAttribute("data-original", link.src);
            link.src = hoverSrc;
        });

        link.addEventListener("mouseout", function () {
            const originalSrc = link.getAttribute("data-original");
            link.src = originalSrc;
        });
    });
});