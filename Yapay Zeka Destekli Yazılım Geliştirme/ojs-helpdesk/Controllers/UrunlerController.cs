using Microsoft.AspNetCore.Mvc;
using SamsungProductsAPI.Models;
using SamsungProductsAPI.Services;

namespace SamsungProductsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UrunlerController : ControllerBase
    {
        private readonly IUrunService _urunService;

        public UrunlerController(IUrunService urunService)
        {
            _urunService = urunService;
        }

        // GET: api/urunler
        [HttpGet]
        public ActionResult<IEnumerable<Urun>> TumUrunler()
        {
            var urunler = _urunService.TumUrunleriGetir();
            return Ok(urunler);
        }

        // GET: api/urunler/5
        [HttpGet("{id}")]
        public ActionResult<Urun> UrunGetir(int id)
        {
            var urun = _urunService.UrunGetir(id);
            
            if (urun == null)
            {
                return NotFound($"ID {id} olan ürün bulunamadı.");
            }

            return Ok(urun);
        }

        // GET: api/urunler/kategori/Telefon
        [HttpGet("kategori/{kategori}")]
        public ActionResult<IEnumerable<Urun>> KategoriyeGoreUrunler(string kategori)
        {
            var urunler = _urunService.KategoriyeGoreUrunler(kategori);
            return Ok(urunler);
        }

        // GET: api/urunler/kategoriler
        [HttpGet("kategoriler")]
        public ActionResult<IEnumerable<string>> TumKategoriler()
        {
            var urunler = _urunService.TumUrunleriGetir();
            var kategoriler = urunler.Select(u => u.Kategori).Distinct().OrderBy(k => k);
            return Ok(kategoriler);
        }
    }
}

