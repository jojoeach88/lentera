document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('is-active');
            const isExpanded = mainMenu.classList.contains('is-active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Kode untuk fungsi terjemahan
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
            "company-name": "Corporate Promotion Website Example",
        "menu-home": "Home",
        "menu-about": "About Us",
        "menu-products": "Products",
        "menu-contact": "Contact Us",
        "hero-h1": "The Best Hosting Solution for Your Business Success",
        "hero-p": "Make your website fast, secure, and always online.",
        "hero-btn": "See Products",
        "services-h2": "Our Services",
        "service1-h3": "Web Hosting",
        "service1-p": "Fast and reliable hosting solutions for all types of websites.",
        "service2-h3": "Domain & SSL",
        "service2-p": "Get a unique domain name and a free SSL certificate.",
        "service3-h3": "Website Maintenance",
        "service3-p": "We ensure your website is always in the best condition.",
        "news-h2": "Latest News",
        "news1-h3": "Our Company Launches the Latest Cloud Hosting Service",
        "news1-p": "We are proud to announce the launch of our next-generation cloud hosting service, which is 10x faster...",
        "news2-h3": "Tips to Improve Your Website's SEO in 2023",
        "news2-p": "SEO is a key to increasing your online business visibility. Learn the latest tips and tricks from our experts...",
        "news3-h3": "Online Seminar: Cyber Security for Business Owners",
        "news3-p": "Join our online seminar to learn how to protect your business and customer data from cyberattacks...",
        "read-more": "Read More &rarr;",
        "footer-p": "&copy; 2023 Corporate Promotion Website Example. All Rights Reserved."
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
