using EcommerceBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoesController : ControllerBase
    {
        private readonly DBContext _dbContext;

        public ShoesController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shoe>>> GetShoes()
        {
            var shoes = await _dbContext.Shoes.ToListAsync();
            return Ok(shoes);
        }
        [HttpGet("{shoeID}")]
        public async Task<ActionResult<Shoe>> GetShoeByID(int shoeID)
        {
            var item = await _dbContext.Shoes.FirstOrDefaultAsync(x => x.ShoeID == shoeID);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }


    }
}
