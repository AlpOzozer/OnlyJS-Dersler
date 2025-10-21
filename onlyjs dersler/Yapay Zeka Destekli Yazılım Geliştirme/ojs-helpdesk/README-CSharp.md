# Samsung Ürünleri Website - C# Backend

Bu proje, Samsung ürünlerini tanıtan responsive bir website'dir. Frontend'de HTML, CSS ve JavaScript, backend'de ASP.NET Core Web API kullanılarak geliştirilmiştir.

## Özellikler

- ✅ **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- ✅ **Mavi-Beyaz Renk Teması**: Samsung marka kimliğine uygun tasarım
- ✅ **10+ Ürün**: Telefon, tablet ve buzdolabı kategorilerinde ürünler
- ✅ **Türkçe Dil Desteği**: Tamamen Türkçe içerik
- ✅ **Kategori Filtreleme**: Ürünleri kategorilere göre filtreleme
- ✅ **Modern UI/UX**: Kullanıcı dostu arayüz
- ✅ **Animasyonlar**: Smooth scroll ve hover efektleri
- ✅ **REST API**: ASP.NET Core Web API ile güçlü backend
- ✅ **Swagger Desteği**: API dokümantasyonu
- ✅ **CORS Desteği**: Cross-origin istekler için

## Ürün Kategorileri

### 📱 Telefonlar
- Samsung Galaxy S24 Ultra
- Samsung Galaxy A55
- Samsung Galaxy Z Fold5
- Samsung Galaxy Z Flip5

### 📱 Tabletler
- Samsung Galaxy Tab S9 Ultra
- Samsung Galaxy Tab A9+
- Samsung Galaxy Tab S9 FE

### 🏠 Buzdolapları
- Samsung Bespoke 4 Kapılı Buzdolabı
- Samsung Side by Side Buzdolabı
- Samsung French Door Buzdolabı

## Kurulum

### Gereksinimler
- .NET 8.0 SDK
- Visual Studio 2022 veya Visual Studio Code

### Adımlar

1. **Projeyi klonlayın:**
   ```bash
   git clone <repository-url>
   cd ojs-helpdesk
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   dotnet restore
   ```

3. **Projeyi çalıştırın:**
   ```bash
   dotnet run
   ```

4. **Tarayıcınızda açın:**
   ```
   http://localhost:5000
   ```

5. **API dokümantasyonunu görüntüleyin:**
   ```
   http://localhost:5000/swagger
   ```

## Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: ASP.NET Core 8.0, C#
- **API**: RESTful Web API
- **Dokümantasyon**: Swagger/OpenAPI
- **Stil**: Responsive CSS Grid ve Flexbox
- **Font**: Inter (Google Fonts)

## Proje Yapısı

```
ojs-helpdesk/
├── Controllers/
│   ├── HomeController.cs      # Ana sayfa controller
│   └── UrunlerController.cs   # Ürün API controller
├── Models/
│   └── Urun.cs               # Ürün model sınıfı
├── Services/
│   ├── IUrunService.cs       # Ürün servis interface
│   └── UrunService.cs        # Ürün servis implementasyonu
├── wwwroot/
│   ├── index.html            # Ana HTML sayfası
│   ├── style.css             # CSS stilleri
│   └── script.js             # JavaScript kodu
├── Program.cs                # Uygulama başlangıç noktası
├── appsettings.json          # Uygulama ayarları
└── SamsungProductsAPI.csproj # Proje dosyası
```

## API Endpoints

### Ürünler
- `GET /api/urunler` - Tüm ürünleri getir
- `GET /api/urunler/{id}` - Belirli bir ürünü getir
- `GET /api/urunler/kategori/{kategori}` - Kategoriye göre ürünleri getir
- `GET /api/urunler/kategoriler` - Tüm kategorileri getir

### Web Sayfaları
- `GET /` - Ana sayfa

## API Örnekleri

### Tüm ürünleri getir
```bash
curl http://localhost:5000/api/urunler
```

### Telefon kategorisindeki ürünleri getir
```bash
curl http://localhost:5000/api/urunler/kategori/Telefon
```

### Belirli bir ürünü getir
```bash
curl http://localhost:5000/api/urunler/1
```

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## Özellikler Detayı

### 🎨 Tasarım
- Mavi (#0066cc) ve beyaz renk teması
- Modern gradient arka planlar
- Smooth hover efektleri
- Card-based ürün tasarımı

### 📱 Responsive
- Mobile-first yaklaşım
- Hamburger menü (mobil)
- Esnek grid sistemi
- Optimize edilmiş görüntüler

### ⚡ Performans
- Lazy loading görüntüler
- Optimize edilmiş CSS
- Minimal JavaScript
- Hızlı sayfa yükleme

### 🔧 Backend
- ASP.NET Core 8.0
- Dependency Injection
- Service Layer pattern
- RESTful API design
- Swagger dokümantasyonu

## Geliştirme

Projeyi geliştirmek için:

1. Kodu klonlayın
2. `dotnet restore` ile bağımlılıkları yükleyin
3. `dotnet run` ile geliştirme sunucusunu başlatın
4. Kodunuzu düzenleyin
5. Değişiklikler otomatik olarak yenilenecektir

## Swagger Dokümantasyonu

Proje çalıştığında Swagger UI'a erişebilirsiniz:
```
http://localhost:5000/swagger
```

Bu sayede API endpoint'lerini test edebilir ve dokümantasyonu görüntüleyebilirsiniz.

## Lisans

MIT License

## İletişim

Herhangi bir sorunuz için lütfen iletişime geçin.

