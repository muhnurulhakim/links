document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Fungsi untuk mengatur tema
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png';
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/sun.png';
        }
    }

    // Cek preferensi sistem
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Cek pengaturan yang disimpan atau gunakan preferensi sistem
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        setTheme(true);
    } else if (currentTheme === 'light') {
        setTheme(false);
    } else {
        setTheme(prefersDarkScheme.matches);
    }

    // Listener untuk perubahan preferensi sistem
    prefersDarkScheme.addListener((e) => {
        if (localStorage.getItem('theme') === null) {
            setTheme(e.matches);
        }
    });

    // Event listener untuk tombol toggle
    themeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        setTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});