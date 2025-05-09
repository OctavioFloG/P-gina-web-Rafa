document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Cargar nav antes del header
        const navResponse = await fetch('../components/nav.html');
        if (!navResponse.ok) throw new Error('Error al cargar el nav');
        const navContent = await navResponse.text();
        const nav = document.createElement('div');
        nav.innerHTML = navContent;
        document.querySelector('header').before(nav.firstChild); // Cambiamos after por before

        // Inicializar el select después de cargar el nav
        const serviciosSelect = document.getElementById('servicios');
        if (serviciosSelect) {
            serviciosSelect.addEventListener('change', function() {
                const url = this.value;
                if (url) {
                    window.location.href = url;
                }
            });
        }

        // Cargar footer
        const footerResponse = await fetch('../components/footer.html');
        if (!footerResponse.ok) throw new Error('Error al cargar el footer');
        const footerContent = await footerResponse.text();
        document.querySelector('footer').innerHTML = footerContent;

    } catch (error) {
        console.error('Error cargando componentes:', error);
    }
});