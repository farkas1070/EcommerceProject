import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TopHeader from "./Components/TopHeader";
import Drawbar from "./Components/Drawbar";
import Itemlist from "./Components/Itemlist";
import Cards from "./Components/Cards";
export interface IAppProps {}

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const tempItems = [
    {
      name: "TH BASKET CORE RWB - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/3b8ebf5bf3a64123907df777ce5576c4/cf85ea56e42e4a00879c7f636e7ee16a.jpg?imwidth=1800&filter=packshot",
      rating: 5,
      price: "199",
      isOnsale: true,
      newPrice: "100",
    },
    {
      name: "EURO TREKKER - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/64f9c52d1f05454aa703d3380045ce2b/61b6b3521ec74b1694601614bee1a737.jpg?imwidth=1800&filter=packshot",
      rating: 3,
      price: "299",
      isOnsale: true,
      newPrice: "100",
    },
    {
      name: "T-CLIP - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/1755abdee916424689763b3fd11a2691/66a51f7415524ccaaec3792b49a56789.jpg?imwidth=762&filter=packshot",
      rating: 5,
      price: "149",
      isOnsale: false,
      newPrice: "100",
    },
    {
      name: "EURO TREKKER - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/4a84592e03474ab79ddeb9cf4679af38/65aae9fa85b746188ba55146ba4512da.jpg?imwidth=1800&filter=packshot",
      rating: 4,
      price: "219",
      isOnsale: true,
      newPrice: "100",
    },
    {
      name: "EURO TREKKER - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/3f6c1cf8374e46bd9789092b99f59e8f/090ca8a2b7e8408481497cebc5139f15.jpg?imwidth=1800&filter=packshot",
      rating: 4,
      price: "319",
      isOnsale: false,
      newPrice: "100",
    },
    {
      name: "LONDON FOREST - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/724b5ae7839b463b9de224988544ab02/dcbbe71fac2045beb0d9848792bf1214.jpg?imwidth=1800&filter=packshot",
      rating: 5,
      price: "209",
      isOnsale: true,
      newPrice: "100",
    },
    {
      name: "Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/c93690942e6643b3a1cf2f4fec020d01/1505625dd224428587d2b2f9be4df4fd.jpg?imwidth=1800&filter=packshot",
      rating: 4,
      price: "299",
      isOnsale: false,
      newPrice: "100",
    },
    {
      name: "WINSOR PARK - Sneaker low",
      img: "https://img01.ztat.net/article/spp-media-p1/4e56727ac1414c37ae95925b9aebb869/5b16cffe6e3a4d698bd75c67340fcaed.jpg?imwidth=1800&filter=packshot",
      rating: 5,
      price: "299",
      isOnsale: false,
      newPrice: "100",
    },
  ];

  return (
    <div>
      <Navbar setIsOpen={setIsOpen}></Navbar>
      <TopHeader></TopHeader>
      <Cards></Cards>
      <Drawbar isOpen={isOpen} setIsOpen={setIsOpen}></Drawbar>
      <Itemlist itemList={tempItems}></Itemlist>
    </div>
  );
}
