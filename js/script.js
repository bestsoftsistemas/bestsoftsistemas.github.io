const botaoMenu = document.querySelector('.menu-mobile');
const menuNavegacao = document.querySelector('.navegacao ul');
botaoMenu.addEventListener('click', () => menuNavegacao.classList.toggle('aberto'));

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({behavior:'smooth',block:'start'});
            menuNavegacao.classList.remove('aberto');
        }
    });
});

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    formulario.reset();
});