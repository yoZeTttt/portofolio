document.addEventListener('DOMContentLoaded', () => {
    // Mengatur tema awal berdasarkan pengaturan yang disimpan
    const themeToggleButton = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('night-mode', currentTheme === 'dark');
    }

    // Fungsi untuk mengganti tema
    const toggleTheme = () => {
        document.body.classList.toggle('night-mode');
        const isNightMode = document.body.classList.contains('night-mode');
        localStorage.setItem('theme', isNightMode ? 'dark' : 'light');
    };

    // Menambahkan event listener untuk tombol ganti tema
    themeToggleButton.addEventListener('click', toggleTheme);
});

