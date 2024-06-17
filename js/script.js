document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o ouvinte de eventos a todos os links que referenciam uma section
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Remove a classe 'active' de todas as sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });

            // Adiciona a classe 'active' à section clicada
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Opcional: rola suavemente até a section
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});