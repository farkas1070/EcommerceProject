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
        <Navbar></Navbar>
        <TopSection></TopSection>
        <ParallaxSection></ParallaxSection>
        <ItemsSection></ItemsSection>
      </main>
      <Footer></Footer>
    </>
  );
}
