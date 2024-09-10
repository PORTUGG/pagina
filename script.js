document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continue-btn');
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const particlesContainer = document.getElementById('particles');

    continueBtn.addEventListener('click', function() {
        splashScreen.classList.add('hidden-opacity'); // Aplica la transición para ocultar el fondo
        setTimeout(() => {
            splashScreen.classList.add('hidden'); // Elimina el elemento del flujo de la página
            createParticles(); // Llama a la función para generar partículas
        }, 500); // Tiempo igual al de la transición de opacidad
        mainContent.classList.remove('hidden');
        document.body.style.overflow = 'auto'; // Restaurar el scroll
    });

    function createParticles() {
        const numberOfParticles = 100; // Ajusta el número de partículas si es necesario

        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = `${Math.random() * 10 + 5}px`; // Tamaño aleatorio entre 5px y 15px
            particle.style.height = particle.style.width; // Mantiene la forma circular
            particle.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
            particle.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // Color aleatorio

            particlesContainer.appendChild(particle);
        }
    }
});
