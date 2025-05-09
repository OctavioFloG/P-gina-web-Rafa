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

function initMap() {
    // Coordenadas de tu ubicación
    const ubicacion = {
        lat: 20.540406232013037,
        lng: -100.81835726107003
    };
    
    // Crear el mapa
    const map = new google.maps.Map(document.querySelector('#mapa iframe'), {
        zoom: 16,
        center: ubicacion
    });
    
    // Añadir marcador
    const marker = new google.maps.Marker({
        position: ubicacion,
        map: map
    });
}