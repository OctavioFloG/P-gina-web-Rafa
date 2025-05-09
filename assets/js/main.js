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
    try {
        // Coordenadas de tu ubicación
        const ubicacion = {
            lat: 20.540406232013037,
            lng: -100.81835726107003
        };
        
        // Esperar a que el iframe esté cargado
        const iframeContainer = document.getElementById('mapa');
        if (!iframeContainer) {
            console.error('No se encontró el contenedor del mapa');
            return;
        }

        // Crear el mapa
        const map = new google.maps.Map(iframeContainer, {
            zoom: 16,
            center: ubicacion,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        // Añadir marcador
        new google.maps.Marker({
            position: ubicacion,
            map: map,
            title: 'Gomar'
        });

    } catch (error) {
        console.error('Error inicializando el mapa:', error);
    }
}