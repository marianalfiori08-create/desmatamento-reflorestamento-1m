document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".card, .impact-grid article, .steps div, .solutions div"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "0.6s ease";

        observer.observe(element);

    });

});
// MENU PARA CELULAR

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
/* =========================================
   ABRIR IMAGEM DOS CARDS
========================================= */

function toggleStep(card) {
    card.classList.toggle("open");
}
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});