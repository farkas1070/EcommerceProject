import * as React from "react";
import Card from "./ItemlistCard";
export interface IAppProps {
  itemList: Array<{
    name: string;
    img: string;
    rating: number;
    price: string;
    isOnsale: boolean;
    newPrice: string;
  }>;
}

const App: React.FC<IAppProps> = ({ itemList }) => {
  return (
    <div className="w-screen mt-20 flex flex-col items-center">
        <div className="container">
      <div className="w-full flex flex-col items-start justify-end">
        <h1 className="text-3xl pt-8 lg:pt-0   text-black font-custom3">
          Find Any Item You Like
        </h1>
        <h2 className="text-lg text-gray-500 mb-5">
          Subtitle text goes here
        </h2>
      </div>
      <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        {itemList.map((item) => {
          return (
            <Card
              name={item.name}
              isOnsale={item.isOnsale}
              price={item.price}
              newPrice={item.newPrice}
              rating={item.rating}
              img={item.img}
            ></Card>
          );
        })}
      </main>
      </div>
    </div>
  );
};
export default App;
