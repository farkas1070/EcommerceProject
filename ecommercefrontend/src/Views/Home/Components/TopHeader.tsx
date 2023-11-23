import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className=" relative mx-auto  w-screen overflow-hidden rounded-t-lg py-32 text-center shadow-lg">
      
      <h1 className="mt-2 text-5xl font-bold text-white">
        New Hot Drop By Nike, discover all the new Items
      </h1>
      <p className="mt-6 text-lg text-white">
        Browse through them now
      </p>
      <div className="mt-6 flex justify-center space-x-2">
        <button className="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">
          See All Deals
        </button>
       
      </div>
      <img
        className="-z-10 absolute top-0 left-0  h-full w-full object-cover"
        src="https://images.squarespace-cdn.com/content/v1/57654f722e69cf4416d26829/1624358972386-E675DO9ZJCYAD2ROAB38/nike-shoe-repair.jpg"
        alt=""
      />
    </div>
  );
}
