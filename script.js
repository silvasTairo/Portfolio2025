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

                // Atualiza a classe "ativo" no link clicado
                links.forEach(link => link.classList.remove('ativo'));
                link.classList.add('ativo');
            }
        });
    });
});
