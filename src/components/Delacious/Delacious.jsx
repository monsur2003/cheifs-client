import React from "react";
import vid from "../../assets/videoplayback (online-video-cutter.com).mp4";
const Delacious = () => {
   return (
      <div>
         <div className="relative my-10">
            <video
               src={vid}
               className="h-[40vh]  w-full object-cover"
               loop
               muted
               autoPlay></video>
            <div className=" absolute inset-0 bg-[#000000b2]"></div>

            <div className="absolute top-10 p-3 left-20">
               <h2 className="text-4xl text-blue-700 font-bold">
                  Pure Delicious
               </h2>
               <p className="font-semibold w-[50%] text-gray-300 mt-2">
                  Why save a roast for when the family come over? This mini
                  version's great any day of the week. Why... Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Facere quo similique
                  reiciendis temporibus tenetur eaque culpa odio perferendis,
                  minus eveniet!
               </p>
               <button className="w-[160px]  h-10 mt-3 bg-blue-700 text-gray-300 font-semibold font-serif text-[18px] hover:bg-blue-900">
                  Give Feedback
               </button>
            </div>
         </div>
      </div>
   );
};

export default Delacious;
