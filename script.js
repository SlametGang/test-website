// Saat ini file ini bisa dibiarkan kosong.
// Di masa depan, Anda bisa menambahkan kode di sini untuk interaksi.
console.log("Halaman Bio Link berhasil dimuat!");

// Contoh: Animasi sederhana saat link di-klik
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('click', event => {
        // Mencegah link berpindah halaman (hanya untuk demo)
        // event.preventDefault(); 
        console.log(`Link "${item.textContent}" diklik!`);
    });
});