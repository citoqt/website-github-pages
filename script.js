document.getElementById('openLink').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default dari link
    window.open('halaman-baru.html', '_blank'); // Membuka halaman baru
});