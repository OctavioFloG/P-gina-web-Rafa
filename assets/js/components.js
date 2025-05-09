document.addEventListener('DOMContentLoaded', async function() {
    // Cargar header
    const headerResponse = await fetch('../components/header.html');
    const headerContent = await headerResponse.text();
    document.querySelector('header').innerHTML = headerContent;

    // Cargar footer
    const footerResponse = await fetch('../components/footer.html');
    const footerContent = await footerResponse.text();
    document.querySelector('footer').innerHTML = footerContent;
});