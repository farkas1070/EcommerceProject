using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using EcommerceBackend.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private readonly DBContext _dbContext;
        public UserController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser([FromBody] User request)
        {
            // Check if the user already exists
            var existingUser = await _dbContext.Users
                .FirstOrDefaultAsync(u =>  u.Email == request.Email);

            if (existingUser != null)
            {
                // User already exists, return a bad request
                return BadRequest(new { Message = "email already in use." });
            }

            // Hash the password before saving it to the database (you should never store plain text passwords)
            string hashedPassword = HashPassword(request.PasswordHash);

            // Create a new User entity
            var newUser = new User
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = hashedPassword,
            };

            // Add the new user to the database
            _dbContext.Users.Add(newUser);
            await _dbContext.SaveChangesAsync();
            await Task.Delay(5000);
            return Ok(new { Message = "User registered successfully." });
        }

        [HttpPost("login")]

        public async Task<ActionResult> LoginUser([FromBody] User request) 
        
        {
            var user = await _dbContext.Users
                .FirstOrDefaultAsync(u => u.PasswordHash == request.PasswordHash && u.Email == request.Email);
            await Task.Delay(5000);
            if (user == null)
            {
                // User not found
                return BadRequest(new { Message = "User With Given credentials does not exist" });
            }

            // Validate the password (you should use a secure password hashing mechanism)
            if (user.PasswordHash != request.PasswordHash)
            {
                // Incorrect password
                return BadRequest(new { Message = "Invalid username or password." });
            }

            // TODO: Generate and return an authentication token (you may use a library like JWT)
            
            return Ok(user);
        }
        // You should implement a proper password hashing function, like bcrypt
        private static string HashPassword(string password)
        {
            // Implement a secure password hashing mechanism
            // Do not store passwords in plain text
            // You might want to use a library like BCrypt.Net
            // Example: BCrypt.Net.BCrypt.HashPassword(password);
            return password;
        }
    }
}
