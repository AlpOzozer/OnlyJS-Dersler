using SamsungProductsAPI.Models;

namespace SamsungProductsAPI.Services
{
    public interface IUrunService
    {
        IEnumerable<Urun> TumUrunleriGetir();
        Urun? UrunGetir(int id);
        IEnumerable<Urun> KategoriyeGoreUrunler(string kategori);
    }
}

