import * as React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ItemsSection from "./Components/ItemsSection";
import ParallaxSection from "./Components/ParallaxSection";
import TopSection from "./Components/TopSection";

export interface IAppProps {}

export default function LandingPage(props: IAppProps) {
  return (
    <>
      <main className="flex flex-col items-center justify-center ">
      <div className=" fixed top-0 w-full z-20">
        <Navbar></Navbar>
        </div>
        <TopSection></TopSection>
  
        <ItemsSection></ItemsSection>
        <ParallaxSection></ParallaxSection>
      </main>
      <Footer></Footer>
    </>
  );
}
