using SamsungProductsAPI.Models;

namespace SamsungProductsAPI.Services
{
    public class UrunService : IUrunService
    {
        private readonly List<Urun> _urunler;

        public UrunService()
        {
            _urunler = new List<Urun>
            {
                new Urun
                {
                    Id = 1,
                    Kategori = "Telefon",
                    Ad = "Samsung Galaxy S24 Ultra",
                    Fiyat = "44.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-s24-s928-sm-s928bzggeua-thumb-537239572",
                    Aciklama = "200MP kamera, S Pen desteği, 5000mAh batarya ile premium deneyim sunan Samsung'un en gelişmiş akıllı telefonu."
                },
                new Urun
                {
                    Id = 2,
                    Kategori = "Telefon",
                    Ad = "Samsung Galaxy A55",
                    Fiyat = "19.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-a55-5g-a556-sm-a556elggeua-thumb-537239572",
                    Aciklama = "50MP kamera, 6.6 inç ekran, 5000mAh batarya ile günlük kullanım için ideal orta segment telefon."
                },
                new Urun
                {
                    Id = 3,
                    Kategori = "Telefon",
                    Ad = "Samsung Galaxy Z Fold5",
                    Fiyat = "69.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-z-fold5-f946-sm-f946bzggeua-thumb-537239572",
                    Aciklama = "Katlanabilir ekran teknolojisi ile tablet ve telefon deneyimini birleştiren yenilikçi tasarım."
                },
                new Urun
                {
                    Id = 4,
                    Kategori = "Tablet",
                    Ad = "Samsung Galaxy Tab S9 Ultra",
                    Fiyat = "32.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-tab-s9-ultra-wifi-x900-sm-x900nzaaeua-thumb-537239572",
                    Aciklama = "14.6 inç büyük ekran, S Pen desteği ile profesyonel çalışma ve eğlence için mükemmel tablet."
                },
                new Urun
                {
                    Id = 5,
                    Kategori = "Tablet",
                    Ad = "Samsung Galaxy Tab A9+",
                    Fiyat = "8.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-tab-a9-plus-wifi-x210-sm-x210nzaaeua-thumb-537239572",
                    Aciklama = "11 inç ekran, uzun batarya ömrü ile günlük kullanım için ekonomik tablet seçeneği."
                },
                new Urun
                {
                    Id = 6,
                    Kategori = "Buzdolabı",
                    Ad = "Samsung Bespoke 4 Kapılı Buzdolabı",
                    Fiyat = "89.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-bespoke-4-door-flex-refrigerator-rf23a9671sr-aa-thumb-537239572",
                    Aciklama = "Kişiselleştirilebilir tasarım, Family Hub teknolojisi ile akıllı buzdolabı deneyimi."
                },
                new Urun
                {
                    Id = 7,
                    Kategori = "Buzdolabı",
                    Ad = "Samsung Side by Side Buzdolabı",
                    Fiyat = "45.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-side-by-side-refrigerator-rs27t5200sr-aa-thumb-537239572",
                    Aciklama = "Geniş depolama alanı, Twin Cooling Plus teknolojisi ile uzun süreli taze saklama."
                },
                new Urun
                {
                    Id = 8,
                    Kategori = "Buzdolabı",
                    Ad = "Samsung French Door Buzdolabı",
                    Fiyat = "35.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-french-door-refrigerator-rf28r7351sr-aa-thumb-537239572",
                    Aciklama = "Şık tasarım, Digital Inverter teknolojisi ile enerji tasarrufu sağlayan buzdolabı."
                },
                new Urun
                {
                    Id = 9,
                    Kategori = "Telefon",
                    Ad = "Samsung Galaxy Z Flip5",
                    Fiyat = "39.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-z-flip5-f946-sm-f946bzggeua-thumb-537239572",
                    Aciklama = "Kompakt katlanabilir tasarım, 3.4 inç Flex Window ile benzersiz kullanıcı deneyimi."
                },
                new Urun
                {
                    Id = 10,
                    Kategori = "Tablet",
                    Ad = "Samsung Galaxy Tab S9 FE",
                    Fiyat = "15.999 TL",
                    Resim = "https://images.samsung.com/is/image/samsung/p6pim/tr/2308/gallery/tr-galaxy-tab-s9-fe-wifi-x510-sm-x510nzaaeua-thumb-537239572",
                    Aciklama = "10.9 inç ekran, S Pen desteği ile eğitim ve eğlence için ideal tablet."
                }
            };
        }

        public IEnumerable<Urun> TumUrunleriGetir()
        {
            return _urunler;
        }

        public Urun? UrunGetir(int id)
        {
            return _urunler.FirstOrDefault(u => u.Id == id);
        }

        public IEnumerable<Urun> KategoriyeGoreUrunler(string kategori)
        {
            return _urunler.Where(u => u.Kategori.Equals(kategori, StringComparison.OrdinalIgnoreCase));
        }
    }
}

