// Global değişkenler
let allProducts = [];
let currentFilter = 'all';

// Ürün verileri (statik)
const productsData = [
    {
        id: 1,
        ad: "Samsung Galaxy S24 Ultra",
        kategori: "Telefon",
        fiyat: "44.999 TL",
        aciklama: "200MP kamera, S Pen desteği, 5000mAh batarya ile premium deneyim sunan Samsung'un en gelişmiş akıllı telefonu.",
        resim: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 2,
        ad: "Samsung Galaxy A55",
        kategori: "Telefon",
        fiyat: "19.999 TL",
        aciklama: "50MP kamera, 6.6 inç ekran, 5000mAh batarya ile günlük kullanım için ideal orta segment telefon.",
        resim: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 3,
        ad: "Samsung Galaxy Z Fold5",
        kategori: "Telefon",
        fiyat: "69.999 TL",
        aciklama: "Katlanabilir ekran teknolojisi ile tablet ve telefon deneyimini birleştiren yenilikçi tasarım.",
        resim: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 4,
        ad: "Samsung Galaxy Tab S9 Ultra",
        kategori: "Tablet",
        fiyat: "32.999 TL",
        aciklama: "14.6 inç büyük ekran, S Pen desteği ile profesyonel çalışma ve eğlence için mükemmel tablet.",
        resim: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 5,
        ad: "Samsung Galaxy Tab A9+",
        kategori: "Tablet",
        fiyat: "8.999 TL",
        aciklama: "11 inç ekran, uzun batarya ömrü ile günlük kullanım için ekonomik tablet seçeneği.",
        resim: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 6,
        ad: "Samsung Bespoke 4 Kapılı Buzdolabı",
        kategori: "Buzdolabı",
        fiyat: "89.999 TL",
        aciklama: "Kişiselleştirilebilir tasarım, Family Hub teknolojisi ile akıllı buzdolabı deneyimi.",
        resim: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 7,
        ad: "Samsung Side by Side Buzdolabı",
        kategori: "Buzdolabı",
        fiyat: "45.999 TL",
        aciklama: "Geniş depolama alanı, Twin Cooling Plus teknolojisi ile uzun süreli taze saklama.",
        resim: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 8,
        ad: "Samsung French Door Buzdolabı",
        kategori: "Buzdolabı",
        fiyat: "35.999 TL",
        aciklama: "Şık tasarım, Digital Inverter teknolojisi ile enerji tasarrufu sağlayan buzdolabı.",
        resim: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 9,
        ad: "Samsung Galaxy Z Flip5",
        kategori: "Telefon",
        fiyat: "39.999 TL",
        aciklama: "Kompakt katlanabilir tasarım, 3.4 inç Flex Window ile benzersiz kullanıcı deneyimi.",
        resim: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=250&fit=crop&crop=center"
    },
    {
        id: 10,
        ad: "Samsung Galaxy Tab S9 FE",
        kategori: "Tablet",
        fiyat: "15.999 TL",
        aciklama: "10.9 inç ekran, S Pen desteği ile eğitim ve eğlence için ideal tablet.",
        resim: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=250&fit=crop&crop=center"
    }
];

// DOM elementleri
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    setupMobileMenu();
});

// Ürünleri yükle
function loadProducts() {
    try {
        showLoading();
        allProducts = productsData;
        displayProducts(allProducts);
        // Animasyonları başlat
        setTimeout(startAnimations, 100);
    } catch (error) {
        console.error('Ürünler yüklenirken hata oluştu:', error);
        showError('Ürünler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
    }
}

// Ürünleri görüntüle
function displayProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>Bu kategoride ürün bulunamadı</h3>
                <p>Lütfen farklı bir kategori seçin.</p>
            </div>
        `;
        return;
    }

    const productsHTML = products.map(product => `
        <div class="product-card" data-category="${product.kategori}">
            <img src="${product.resim}" alt="${product.ad}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/300x250/0066cc/ffffff?text=Samsung+${product.kategori}'">
            <div class="product-info">
                <div class="product-category">${product.kategori}</div>
                <h3 class="product-title">${product.ad}</h3>
                <div class="product-price">${product.fiyat}</div>
                <p class="product-description">${product.aciklama}</p>
            </div>
        </div>
    `).join('');

    productsGrid.innerHTML = productsHTML;
}

// Filtreleme işlevi
function filterProducts(category) {
    currentFilter = category;
    
    // Aktif filtre butonunu güncelle
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Ürünleri filtrele
    const filteredProducts = category === 'all' 
        ? allProducts 
        : allProducts.filter(product => product.kategori === category);

    displayProducts(filteredProducts);
}

// Event listener'ları ayarla
function setupEventListeners() {
    // Filtre butonları
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterProducts(category);
        });
    });

    // CTA butonu
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.querySelector('.products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // Smooth scroll için navigation linkleri
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mobil menü işlevselliği
function setupMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Menü dışına tıklandığında menüyü kapat
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Loading durumu göster
function showLoading() {
    productsGrid.innerHTML = `
        <div class="loading">
            <p>Ürünler yükleniyor...</p>
        </div>
    `;
}

// Hata mesajı göster
function showError(message) {
    productsGrid.innerHTML = `
        <div class="error">
            <h3>Hata</h3>
            <p>${message}</p>
            <button onclick="location.reload()" class="retry-button">Tekrar Dene</button>
        </div>
    `;
}

// Ürün arama işlevi (gelecekte eklenebilir)
function searchProducts(query) {
    if (!query.trim()) {
        displayProducts(allProducts);
        return;
    }

    const filteredProducts = allProducts.filter(product => 
        product.ad.toLowerCase().includes(query.toLowerCase()) ||
        product.kategori.toLowerCase().includes(query.toLowerCase()) ||
        product.aciklama.toLowerCase().includes(query.toLowerCase())
    );

    displayProducts(filteredProducts);
}

// Sayfa scroll efekti
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 102, 204, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)';
    }
});

// Intersection Observer ile animasyonlar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Ürün kartlarını gözlemle
function observeProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Ürünler yüklendikten sonra animasyonları başlat
function startAnimations() {
    setTimeout(observeProductCards, 100);
}

// Ürünler yüklendiğinde animasyonları başlat
document.addEventListener('productsLoaded', startAnimations);
