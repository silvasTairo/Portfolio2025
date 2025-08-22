document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar .nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link

            const targetId = link.getAttribute('href').substring(1); // Obtém o ID do destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Animação personalizada usando scrollIntoView
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.getElementById("linguagens").onclick = function() {
    window.location.href = "linguagens-trimestres.html";
};
document.getElementById("humanas").onclick = function() {
    window.location.href = "humanas-trimestres.html";
};
document.getElementById("matematica").onclick = function() {
    window.location.href = "matematica-trimestres.html";
};
document.getElementById("natureza").onclick = function() {
    window.location.href = "natureza-trimestres.html";
};



document.getElementById("modelagem").onclick = function() {
    window.location.href = "modelagem.html";
};
document.getElementById("desenvolvimento").onclick = function() {
    window.location.href = "desenvolvimento.html";
};
document.getElementById("iot").onclick = function() {
    window.location.href = "iot.html";
};

document.getElementById("banco_dados").onclick = function() {
    window.location.href = "banco_dados.html";
};