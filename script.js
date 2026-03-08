document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-img');
    const content = document.querySelector('.content');

    // Efecto de flotación suave para la hamburguesa
    let floatY = 0;
    function animate() {
        floatY = Math.sin(Date.now() / 1000) * 10;
        burger.style.transform = `translateY(${floatY}px)`;
        requestAnimationFrame(animate);
    }
    animate();

    // Evento para el botón
    document.querySelector('.order-btn').addEventListener('click', () => {
        alert('¡Gracias por tu pedido! Preparando tu hamburguesa...');
    });
});