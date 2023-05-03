import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { FaPhone } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
   return (
      <div className="w-full mx-auto relative bg-white ">
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
               className="h-screen  bg-no-repeat bg-center bg-cover"
               data-src={banner1}
               style={{
                  backgroundImage: `url(${banner1})`,
                  width: "100%",
                  height: "100vh",
               }}>
               <div className=" absolute inset-0 bg-[#000000cc]"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2 className="text-5xl font-bold w-[80%] mx-auto">
                     {" "}
                     <span className="text-6xl text-blue-700">
                        Explore
                     </span>{" "}
                     Special Taste & The Best Quality
                  </h2>

                  <p className="text-gray-400 text-[18px] p-3 border-l-4 border-r-4 mt-3 border-blue-700">
                     <span className="text-2xl text-blue-700">Foodie</span>,
                     along with his team, offers culinary and management
                     services. We have the experience to provide concept
                     development strategies and best practice principles in
                     order to achieve maximum sales performance.
                  </p>
                  <div className="flex justify-center items-center mt-7">
                     <button className="flex gap-1 rounded-none w-[30%] items-center btn btn-outline btn-primary text-blue-700 font-bold">
                        {" "}
                        Contact us<FaPhone></FaPhone>
                     </button>
                  </div>
               </div>
            </div>
            {/* banner2 */}
            <div
               className="h-screen  bg-no-repeat bg-center bg-cover"
               data-src={banner2}
               style={{
                  backgroundImage: `url(${banner2})`,
                  width: "100%",
                  height: "100vh",
               }}>
               <div className=" absolute inset-0 bg-[#000000cc]"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2 className="text-5xl font-bold w-[80%] mx-auto">
                     {" "}
                     <span className="text-6xl text-blue-700">Welcome</span> to
                     world class chefs{" "}
                  </h2>

                  <p className="text-gray-400 text-[18px] p-3 border-l-4 border-r-4 mt-3 border-blue-700">
                     <span className="text-2xl text-blue-700">Foodie </span>
                     restaurant is not just about food, it is an experience.
                     Saying that it always helps if the food is bloody good.
                     Constructio interrete. Miserum hominem! Si dolor summum
                     malum est, dici aliter non potest.
                  </p>
                  <div className="flex justify-center items-center mt-7">
                     <button className="flex gap-1 rounded-none w-[30%] items-center btn btn-outline btn-primary text-blue-700 font-bold">
                        {" "}
                        Contact us<FaPhone></FaPhone>
                     </button>
                  </div>
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
               <div className=" absolute inset-0 bg-[#000000cc]"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2 className="text-5xl font-bold w-[85%] mx-auto">
                     {" "}
                     <span className="text-6xl text-blue-700">Know </span>Know
                     More About The Ticrou Article
                  </h2>

                  <p className="text-gray-400 text-[18px] border-l-4 p-3 border-r-4 mt-3 border-blue-700">
                     <span className="text-2xl text-blue-700">Foodie </span>
                     team of talented chefs is dedicated to creating
                     unforgettable culinary experiences that showcase the very
                     best in flavors, textures, and ingredients. From fine
                     dining to casual cuisine, we're passionate about
                     highlighting the most innovative and exciting culinary
                     trends from around the world.
                  </p>
                  <div className="flex justify-center items-center mt-7">
                     <button className="flex gap-1 rounded-none w-[30%] items-center btn btn-outline btn-primary text-blue-700 font-bold">
                        {" "}
                        Contact us<FaPhone></FaPhone>
                     </button>
                  </div>
               </div>
            </div>
         </AutoplaySlider>
      </div>
   );
};

export default Banner;
