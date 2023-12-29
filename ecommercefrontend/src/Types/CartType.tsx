import { Shoe } from "./ShoeType";

export interface Cart {
    // Define the shape of your Shoe object
    CartID: number;
    shoeID: number;
    UserID: number;
    quantity: number;
    shoe: Shoe 
  }