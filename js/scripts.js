/* Lógica do carrossel */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener("click", () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
});

/* Iniciando o particles.js */
particlesJS.load('particles-js-section-1', 'js/particlesjs-config (2).json', function() {
});

particlesJS.load('particles-js-section-2', 'js/particlesjs-config (2).json', function() {
});

/* Fazendo a lógica do carrossel de ícones */ 
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy);

/* Fazendo o botão do final da página subir até o topo */ 
function btnSubir() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* Fazendo o menu Mobile */ 
function openNav() {
    document.getElementById("myNav").style.width = '100%';
}

function closeNav() {
    document.getElementById("myNav").style.width = '0';
}

// Adiciona um evento de clique ao documento
document.addEventListener('click', function(event) {
    // Verifica se o alvo do clique não é o botão de abrir o menu nem nenhum de seus elementos filhos
    if (!event.target.matches('.nav-button-mobile') && !event.target.closest('.overlay-content')) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});

// Adiciona um evento de redimensionamento da janela para verificar o tamanho da tela
window.addEventListener('resize', function() {
    // Verifica se a largura da janela é menor que 768 pixels (tamanho de tela para dispositivos móveis)
    if (window.innerWidth < 768) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});

/* Configurando a Api da Web3Forms para enviar para o meu e-mail */
function submitWeb3Form() {
    let form = document.getElementById('web3form');
    let formData = new FormData(form);
    // Adicione o email do destinatário aos dados do formulário
    formData.append('recipient_email', 'gugagantoisdev@gmail.com');
    fetch('https://api.web3forms.com/submit/ff029c7d-409d-4247-a98a-29a661d2d60a', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let frase = document.getElementById('frase'); // Obtém a referência do elemento de texto 
        if (data.success) {
            frase.innerText = 'Mensagem enviada com sucesso!';
        } else {
            frase.innerText = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente!';
        }
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem', error);
        let frase = document.getElementById('frase'); // Obtém a referência do elemento de texto
        frase.innerText = 'Mensagem enviada com sucesso!';
    });
}