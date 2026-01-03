using Microsoft.AspNetCore.Mvc;

namespace SamsungProductsAPI.Controllers
{
    public class HomeController : Controller
    {
        // GET: /
        [HttpGet]
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}

