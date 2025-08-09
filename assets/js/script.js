document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    const languageSelect = document.getElementById('language-select');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('is-active');
            const isExpanded = mainMenu.classList.contains('is-active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Data terjemahan yang disatukan dan diperbaiki
    const translations = {
        id: {
            "company-name": "Contoh web promosi perusahaan",
            "menu-home": "Beranda",
            "menu-about": "Tentang Kami",
            "menu-products": "Produk",
            "menu-contact": "Hubungi Kami",
            "hero-h1": "Solusi Hosting Terbaik untuk Kesuksesan Bisnis Anda",
            "hero-p": "Jadikan website Anda cepat, aman, dan selalu online.",
            "hero-btn": "Lihat Produk",
            "services-h2": "Layanan Kami",
            "service1-h3": "Web Hosting",
            "service1-p": "Solusi hosting cepat dan andal untuk semua jenis website.",
            "service2-h3": "Domain & SSL",
            "service2-p": "Dapatkan nama domain unik dan sertifikat SSL gratis.",
            "service3-h3": "Maintenance Website",
            "service3-p": "Kami memastikan website Anda selalu dalam kondisi terbaik.",
            "news-h2": "Berita Terbaru",
            "news1-h3": "Perusahaan Kami Merilis Layanan Cloud Hosting Terbaru",
            "news1-p": "Kami dengan bangga mengumumkan peluncuran layanan cloud hosting generasi terbaru kami, dengan kecepatan 10x lebih cepat...",
            "news2-h3": "Tips Meningkatkan SEO Website Anda di Tahun 2023",
            "news2-p": "SEO merupakan kunci utama untuk meningkatkan visibilitas bisnis online Anda. Pelajari tips dan trik terbaru dari para ahli kami...",
            "news3-h3": "Seminar Online: Keamanan Cyber untuk Pemilik Bisnis",
            "news3-p": "Bergabunglah dengan seminar online kami untuk mempelajari cara melindungi data bisnis dan pelanggan Anda dari serangan cyber...",
            "read-more": "Baca Selengkapnya &rarr;",
            "footer-p": "&copy; 2023 Contoh web promosi perusahaan. Hak Cipta Dilindungi."
        },
        en: {
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
        }
    };

    function applyTranslation(lang) {
        const elements = document.querySelectorAll('[data-translate-key]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName.toLowerCase() === 'title') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
    }

    // Terapkan terjemahan saat halaman dimuat
    // Bahasa awal adalah yang terpilih di dropdown
    applyTranslation(languageSelect.value);

    // Event listener untuk perubahan pada dropdown
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        applyTranslation(selectedLang);
    });
});
