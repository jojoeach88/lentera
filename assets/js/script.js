document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    let isEnglish = false;

    // Contoh terjemahan sederhana, Anda bisa gunakan data JSON
    const translations = {
        id: {
            home: 'Beranda',
            about: 'Tentang Kami',
            products: 'Produk',
            contact: 'Hubungi Kami',
            heroTitle: 'Solusi Hosting Terbaik untuk Kesuksesan Bisnis Anda'
        },
        en: {
            home: 'Home',
            about: 'About Us',
            products: 'Products',
            contact: 'Contact Us',
            heroTitle: 'The Best Hosting Solution for Your Business Success'
        }
    };

    translateBtn.addEventListener('click', function() {
        if (isEnglish) {
            document.querySelector('header nav ul li:nth-child(1) a').textContent = translations.id.home;
            document.querySelector('header nav ul li:nth-child(2) a').textContent = translations.id.about;
            document.querySelector('header nav ul li:nth-child(3) a').textContent = translations.id.products;
            document.querySelector('header nav ul li:nth-child(4) a').textContent = translations.id.contact;
            document.querySelector('.hero h1').textContent = translations.id.heroTitle;
            translateBtn.textContent = 'English';
        } else {
            document.querySelector('header nav ul li:nth-child(1) a').textContent = translations.en.home;
            document.querySelector('header nav ul li:nth-child(2) a').textContent = translations.en.about;
            document.querySelector('header nav ul li:nth-child(3) a').textContent = translations.en.products;
            document.querySelector('header nav ul li:nth-child(4) a').textContent = translations.en.contact;
            document.querySelector('.hero h1').textContent = translations.en.heroTitle;
            translateBtn.textContent = 'Indonesia';
        }
        isEnglish = !isEnglish;
    });

    // Skrip tambahan untuk fungsionalitas lain dapat ditambahkan di sini
});
