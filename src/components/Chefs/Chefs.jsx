import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChef from "../SingleChef/SingleChef";
import Typewriter from "typewriter-effect";
import imagee from "../../assets/banner2.jpg";

const Chefs = () => {
   const allChefs = useLoaderData();
   // console.log(allChefs);
   return (
      <div className="">
         <div className="relative mt-6">
            <img
               className="bg-cover hidden md:block md:h-[140vh] bg-center bg-transparent z-20 "
               src={imagee}
               alt=""
            />
            <div className=" absolute md:inset-0 bg-[#120b29b2]"></div>
            <div className=" md:absolute md:top-0 md:left-0 right-0">
               <div className="">
                  <div className="">
                     <h2 className="text-center text-blue-700 md:text-5xl font-bold text-4xl mt-4">
                        Our Master Chefs
                     </h2>
                     <p className=" text-gray-200 text-center my-4  text-[20px]">
                        <Typewriter
                           options={{
                              strings: [
                                 "Cooking is an art and I am the master chef",
                                 "The secret to great cooking is passion, precision, and creativity. ",
                              ],
                              autoStart: true,
                              loop: true,
                              delay: 40,
                              cursor: "_",
                              deleteSpeed: 30,
                           }}
                        />
                     </p>
                  </div>
                  <div className="w-[90%] mx-auto flex flex-col justify-center items-center md:w-[80%] md:mx-auto md:grid md:grid-cols-2 gap-x-3 gap-y-3">
                     {allChefs.map((chef) => (
                        <SingleChef key={chef.id} chef={chef}></SingleChef>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Chefs;
