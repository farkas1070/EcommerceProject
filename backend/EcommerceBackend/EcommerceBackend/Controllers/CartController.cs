using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceBackend.Models;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly DBContext _dbContext;

        public CartController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCartItems(int userId)
        {
            var cartItems = await _dbContext.Cart
                .Include(c => c.Shoe) // Include the Shoe details
                .Where(c => c.UserID == userId)
                .ToListAsync();

            return Ok(cartItems);
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddToCart([FromBody] Cart request)
        {
            // You can add additional validation logic here if needed
            var existingCartItem = _dbContext.Cart
                .FirstOrDefault(c => c.UserID == request.UserID && c.ShoeID == request.ShoeID);

            if (existingCartItem != null) 
            {
                existingCartItem.Quantity += request.Quantity;
            }
            
            else
            {
                var cartItem = new Cart
                
                {
                    UserID = request.UserID,
                    ShoeID = request.ShoeID,
                    Quantity = request.Quantity
                };
                _dbContext.Cart.Add(cartItem);
            }

           
            await _dbContext.SaveChangesAsync();

            return Ok(new { Message = "Item added to the cart successfully." });
        }
        [HttpDelete("remove")]
        public async Task<ActionResult> RemoveFromCart([FromBody] Cart request)
        {
            try
            {
                var existingCartItem = _dbContext.Cart
                    .FirstOrDefault(c => c.UserID == request.UserID && c.ShoeID == request.ShoeID);

                if (existingCartItem != null)
                {
                    if (existingCartItem.Quantity > 1)
                    {
                        existingCartItem.Quantity -= 1;
                    }
                    else
                    {
                        _dbContext.Cart.Remove(existingCartItem);
                    }

                    await _dbContext.SaveChangesAsync();
                    return Ok(new { Message = "Item removed from the cart successfully." });
                }
                else
                {
                    return NotFound(new { Message = "Item not found in the cart." });
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, new { Message = "Internal Server Error" });
            }
        }
    }


}
