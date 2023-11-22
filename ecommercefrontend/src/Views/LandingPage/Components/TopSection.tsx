import * as React from 'react';
import LandingPagePic from "../../../Assets/Photos/LandingPage.png";
import LandingPageVid from "../../../Assets/Videos/LandingPageVid.mp4"

export default function App () {
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
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

  <div className="  h-full px-4 py-28 md:py-40 sm:max-w-xl w-screen lg:px-8">
   
  </div>
</div>
  );
}
