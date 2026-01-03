namespace SamsungProductsAPI.Models
{
    public class Urun
    {
        public int Id { get; set; }
        public string Kategori { get; set; } = string.Empty;
        public string Ad { get; set; } = string.Empty;
        public string Fiyat { get; set; } = string.Empty;
        public string Resim { get; set; } = string.Empty;
        public string Aciklama { get; set; } = string.Empty;
    }
}

