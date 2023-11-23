import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div className=" flex flex-col items-center w-screen ">
      <div className="container mt-20">
        <div className="w-full flex flex-col items-start justify-end">
          <h1 className="text-3xl pt-8 lg:pt-0   text-black font-custom3">
            Trending New Items
          </h1>
          <h2 className="text-lg text-gray-500 mb-5">Discover all the newest items</h2>
        </div>
        <div className=" grid grid-cols-3 gap-4 ">
          <button className="relative h-80 rounded overflow-hidden transition-transform hover:scale-105">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: `url("https://media.wired.com/photos/63728604691ed08cc4b98976/16:9/w_2095,h_1178,c_limit/Nike-Swoosh-News-Gear.jpg")`,
              }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute bottom-5 left-5 flex items-center justify-center">
              <p className="text-2xl text-white">New Metaverse Sneakers</p>
            </div>
          </button>
          <button className="relative h-80 rounded overflow-hidden transition-transform hover:scale-105">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Nike_mag_flight_club.jpg/640px-Nike_mag_flight_club.jpg")`,
              }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute bottom-5 left-5 flex items-center justify-center">
              <p className="text-2xl text-white">New Self Lacing Nike Shoes</p>
            </div>
          </button>
          <button className="relative h-80 rounded overflow-hidden transition-transform hover:scale-105">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{
                backgroundImage: `url("https://justfreshkicks.com/wp-content/uploads/2022/08/Nike-Air-Max-Scorpion-Wolf-Grey-DJ4701-002-Release-Date-4.jpeg")`,
              }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute bottom-5 left-5 flex items-center justify-center">
              <p className="text-2xl text-white">The New Air Max Scorpion</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
