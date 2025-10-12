// Menunggu seluruh konten halaman dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {

    // 1. Pilih gambar menu pertama menggunakan ID yang sudah kita buat
    const menuImage1 = document.getElementById('menu-image-1');

    // Pastikan elemen gambar ada untuk menghindari error
    if (menuImage1) {

        // 2. Atur interval untuk menjalankan fungsi setiap 10 detik (10000 milidetik)
        setInterval(() => {
            // Tambahkan kelas 'wobble-effect' untuk memulai animasi
            menuImage1.classList.add('wobble-effect');
        }, 5000);

        // 3. Hapus kelas setelah animasi selesai
        // Ini penting agar animasi bisa dipicu kembali di interval berikutnya
        menuImage1.addEventListener('animationend', () => {
            menuImage1.classList.remove('wobble-effect');
        });

    }

    console.log("Halaman Bio Link berhasil dimuat dan animasi menu aktif!");

});