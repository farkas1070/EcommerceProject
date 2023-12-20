namespace EcommerceBackend.Models
{
    public class Shoe
    {
        public int ShoeID { get; set; }
        public string BrandName { get; set; }
        public string ProductName { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public bool IsOnSale { get; set; }
        public decimal? NewPrice { get; set; }
    }
}
