var url = "https://wa.me/61434033654?text=";

function send() {
    var msg = url +
        "Hi, Hint services";
    window.open(msg, '_blank').focus();
};

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.hero-navbar');
    var whatsappButton = document.querySelector('.whatsapp-btn .btn');

    function toggleWhatsappStyleOnScroll() {
        var isScrolled = window.scrollY > 10;

        if (navbar) {
            navbar.classList.toggle('is-scrolled', isScrolled);
        }

        if (whatsappButton) {
            whatsappButton.classList.toggle('is-scrolled', isScrolled);
        }
    }

    window.addEventListener('scroll', toggleWhatsappStyleOnScroll, { passive: true });
    toggleWhatsappStyleOnScroll();
});

