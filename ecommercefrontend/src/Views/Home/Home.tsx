import React, { useState,useEffect,useContext } from "react";
import Navbar from "./Components/Navbar";
import TopHeader from "./Components/TopHeader";
import Drawbar from "./Components/Drawbar";
import Itemlist from "./Components/Itemlist";
import Cards from "./Components/Cards";
import { shoesContext } from "../../Context/GlobalContext";
export interface IAppProps {}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shoes, setShoes] = useContext(shoesContext);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen}></Navbar>
      <TopHeader></TopHeader>
      <Cards></Cards>
      <Drawbar isOpen={isOpen} setIsOpen={setIsOpen}></Drawbar>
      <Itemlist itemList={shoes}></Itemlist>
    </div>
  );
}
export default App;
