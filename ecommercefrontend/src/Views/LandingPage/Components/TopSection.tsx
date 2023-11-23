import React,{useEffect} from "react";
import LandingPagePic from "../../../Assets/Photos/LandingPage.png";
import LandingPageVid from "../../../Assets/Videos/LandingPageVid.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={LandingPageVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      
      <div className="relative  h-full px-4 py-28 md:py-40 w-screen lg:px-8 z-10 flex items-center">
        <section className="mx-auto py-16">
         
          <div data-aos="fade-up" data-aos-delay="500" className=" flex w-full flex-col items-center justify-center  md:max-w-screen-md z-50">
            <div className="text-center">
              <h2 className="bg-clip-text text-3xl font-extrabold text-white sm:text-5xl">
                A New Way Of Shopping
              </h2>
              <p className="bg-gradient-to-r from-pink-500 to-orange-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
                Discover All Your Favourite Shoes At One Place
              </p>
              <a
                href="#"
                className="z-80 shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
