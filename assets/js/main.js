// Este archivo contiene el código JavaScript principal para la funcionalidad del sitio web.

document.addEventListener('DOMContentLoaded', function() {
    const serviciosSelect = document.getElementById('servicios');
    
    serviciosSelect.addEventListener('change', function() {
        const url = this.value;
        if (url) {
            window.location.href = url;
        }
    });
});