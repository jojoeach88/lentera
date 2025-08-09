document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('is-active');
        const isExpanded = mainMenu.classList.contains('is-active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    const languageSelect = document.getElementById('language-select');

    // Data terjemahan dalam format JSON yang terstruktur
    const translations = {
        id: {
            navHome: 'Beranda',
            navAbout: 'Tentang Kami',
            navProducts: 'Produk',
            navContact: 'Hubungi Kami',
            heroTitle: 'Solusi Hosting Terbaik untuk Kesuksesan Bisnis Anda',
            heroSubtitle: 'Jadikan website Anda cepat, aman, dan selalu online.',
            btnSeeProducts: 'Lihat Produk',
            productHeading: 'Pilih Paket Hosting yang Sesuai',
            // Tambahkan semua teks lain yang perlu diterjemahkan di sini
        },
        en: {
            navHome: 'Home',
            navAbout: 'About Us',
            navProducts: 'Products',
            navContact: 'Contact Us',
            heroTitle: 'The Best Hosting Solution for Your Business Success',
            heroSubtitle: 'Make your website fast, secure, and always online.',
            btnSeeProducts: 'See Products',
            productHeading: 'Choose the Right Hosting Plan',
            // Tambahkan semua terjemahan di sini
        }
    };

    function applyTranslation(lang) {
        // Navigasi
        document.getElementById('nav-home').textContent = translations[lang].navHome;
        document.getElementById('nav-about').textContent = translations[lang].navAbout;
        document.getElementById('nav-products').textContent = translations[lang].navProducts;
        document.getElementById('nav-contact').textContent = translations[lang].navContact;

        // Halaman Beranda (jika ada elemennya)
        const heroTitleElement = document.querySelector('.hero h1');
        if (heroTitleElement) {
            heroTitleElement.textContent = translations[lang].heroTitle;
            document.querySelector('.hero p').textContent = translations[lang].heroSubtitle;
            document.querySelector('.hero .btn').textContent = translations[lang].btnSeeProducts;
        }
        
        // Halaman Produk (jika ada elemennya)
        const productsHeadingElement = document.querySelector('.products h2');
        if (productsHeadingElement) {
            productsHeadingElement.textContent = translations[lang].productHeading;
        }
    }

    // Terapkan terjemahan saat halaman dimuat (default 'id')
    applyTranslation(languageSelect.value);

    // Event listener untuk perubahan pada dropdown
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        applyTranslation(selectedLang);
    });
});
