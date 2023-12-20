using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EcommerceBackend.Models
{
    public class Cart
    {
        [Key]
        public int CartID { get; set; } // Primary key
        public int UserID { get; set; }
        public int ShoeID { get; set; }

        [ForeignKey("ShoeID")]
        public Shoe? Shoe { get; set; }
        public int Quantity { get; set; }
    }
}
