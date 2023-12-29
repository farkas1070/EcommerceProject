import React, { useContext } from "react";
import { cartContext, userContext } from "../../../Context/GlobalContext";
import axios from "axios";
import {Cart} from "../../../Types/CartType"
import {Shoe} from "../../../Types/ShoeType"
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [cartData, setCartData] = useContext(cartContext);
  const [user, setUser] = useContext(userContext);
  const cartPriceSum: number = cartData.reduce(
    (sum, el) => sum + el.shoe.price * el.quantity,
    0
  );
  const shippingFee: number = 8;

  const removeFromCart = async (userID: number, shoeID: number) => {
    try {
      const response = await axios.delete(
        "https://localhost:7212/api/Cart/remove",
        {
          data: { UserID: userID, ShoeID: shoeID },
        }
      );
      console.log(response.data);
      setCartData(prevCartData => {
        // Find the item in the cart
        const updatedCart = prevCartData.map(item => {
            if (item.shoeID === shoeID) {
                // Decrease quantity if greater than 1, else remove the item
                return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 };
            }
            return item;
        });

        // Filter out items with quantity 0
        return updatedCart.filter(item => item.quantity > 0);
    });
      // Handle success
    } catch (error) {
      console.error("Error removing item from cart:", error);
      // Handle error
    }
  };
  const addToCart = async (userID: number, shoeID: number,cartID:number, shoe:Shoe, ) => {
    let cartItem = {
      UserID: userID,
      ShoeID: shoeID,
      Quantity: 1,
    };
    try {
      console.log(cartItem);

      const response = await axios.post(
        "https://localhost:7212/api/Cart/add",
        cartItem
      );
      setCartData(prevCartData => {
        const existingItemIndex = prevCartData.findIndex(
          item => item.shoeID === shoeID
        );
        if (existingItemIndex !== -1) {
          const updatedCartData = [...prevCartData];
          updatedCartData[existingItemIndex].quantity += 1;
          return updatedCartData;
        } else {
          const newItem: Cart = {
            CartID: cartID, 
            shoeID:shoeID,
            UserID: userID, 
            quantity: 1,
            shoe:shoe
            
          };
          return [...prevCartData,newItem];
        }
        
    });
      console.log(shoe)
      // Handle success or update UI accordingly
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error or update UI accordingly
    }
  };
  return (
    <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="container mx-auto mt-8  md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cartData.map((item) => {
                    return (
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div className="shrink-0">
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src={item.shoe.imageUrl}
                            alt=""
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {item.shoe.productName}
                              </p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                {item.shoe.brandName}
                              </p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                ${item.shoe.price}
                              </p>

                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button
                                    onClick={() => {
                                      removeFromCart(
                                        user.userID,
                                        item.shoe.shoeID
                                      );
                                    }}
                                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                  >
                                    -
                                  </button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    {item.quantity}
                                  </div>
                                  <button
                                    onClick={() => {
                                      addToCart(user.userID, item.shoe.shoeID, item.CartID,item.shoe);
                                    }}
                                    className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              type="button"
                              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                  className=""
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${cartPriceSum.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${shippingFee}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-xs font-normal text-gray-400">USD</span>{" "}
                  {(cartPriceSum + shippingFee).toFixed(2)}$
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
