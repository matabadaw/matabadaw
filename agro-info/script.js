// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botão "Explorar Agora"
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.getElementById('agricultura').scrollIntoView({ behavior: 'smooth' });
});

// Adicionar classe active ao link de navegação conforme scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Efeito de fade-in ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideDown 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .tip-card, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Adicionar estilo para active link
const style = document.createElement('style');
style.innerHTML = `
    .nav-links a.active {
        background-color: rgba(255, 255, 255, 0.3);
        border-bottom: 3px solid var(--white);
    }
`;
document.head.appendChild(style);

// Event listeners para cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = 'var(--accent-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = 'var(--primary-color)';
    });
});

// Função para copiar email
function copyEmail() {
    const email = 'info@agroinfo.com.br';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado para a área de transferência!');
    });
}

// Dados dos produtos (para possível expansão futura)
const agricultura = [
    { id: 1, nome: 'Milho', emoji: '🌽', meses: 'Set-Dez' },
    { id: 2, nome: 'Trigo', emoji: '🌾', meses: 'Abr-Jun' },
    { id: 3, nome: 'Batata', emoji: '🥔', meses: 'Fev-Mar' },
    { id: 4, nome: 'Tomate', emoji: '🍅', meses: 'Ago-Dez' },
    { id: 5, nome: 'Soja', emoji: '����', meses: 'Out-Nov' },
    { id: 6, nome: 'Cenoura', emoji: '🥕', meses: 'Mar-Set' }
];

const pecuaria = [
    { id: 1, nome: 'Gado de Corte', emoji: '🐄' },
    { id: 2, nome: 'Gado de Leite', emoji: '🐄' },
    { id: 3, nome: 'Suinocultura', emoji: '🐷' },
    { id: 4, nome: 'Avicultura', emoji: '🐔' },
    { id: 5, nome: 'Ovinocultura', emoji: '🐑' },
    { id: 6, nome: 'Equinocultura', emoji: '🐴' }
];

console.log('AgroInfo carregado com sucesso!');