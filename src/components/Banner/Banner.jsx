import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
   return (
      <div className="w-full mx-auto bg-white ">
         <AutoplaySlider
            organicIcon={false}
            play={true}
            cancelOnInteraction={false}
            interval={5000}
            style={{
               width: "100%",
               height: "100vh",
            }}
            bullets={false}>
            <div
               className="h-screen bg-no-repeat bg-center bg-cover"
               data-src={banner1}
               style={{
                  backgroundImage: `url(${banner1})`,
                  width: "100%",
                  height: "100vh",
               }}>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-[#0c0fa756] w-[100%] h-[100vh] text-center">
                  <h2>Delacious food is our passion</h2>
                  <p>Slide content goes here</p>
               </div>
            </div>
            <div
               className="h-screen  bg-no-repeat bg-center bg-cover"
               data-src={banner2}
               style={{
                  backgroundImage: `url(${banner2})`,
                  width: "100%",
                  height: "100vh",
               }}>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2>Slide 2</h2>
                  <p>Slide content goes here</p>
               </div>
            </div>
            <div
               className="h-screen bg-no-repeat bg-center bg-cover"
               data-src={banner3}
               style={{
                  backgroundImage: `url(${banner3})`,
                  width: "100%",
                  height: "100vh",
               }}>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2 className="text-5xl font-bold">Slide 3</h2>
                  <p>Slide content goes here</p>
               </div>
            </div>
         </AutoplaySlider>
      </div>
   );
};

export default Banner;
