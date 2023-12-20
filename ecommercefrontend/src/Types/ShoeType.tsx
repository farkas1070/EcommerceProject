export interface Shoe {
    // Define the shape of your Shoe object
    shoeID: number;
    brandName: string;
    productName: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    newPrice: number | null;
  }