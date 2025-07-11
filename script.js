// Funcionalidade do Menu Hamburger para dispositivos móveis
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abre e fecha o menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animações de scroll (efeito fade-in para seções)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn 1s ease-out forwards`;
        }
    });
}, { threshold: 0.1 });

// Observa todas as seções com a classe .content-section ou .content-section-dark
document.querySelectorAll('.content-section, .content-section-dark').forEach(section => {
    section.style.opacity = '0'; // Garante que a seção esteja invisível antes da animação
    observer.observe(section);
});