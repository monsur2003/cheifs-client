import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "../Review/Review";
import Typewriter from "typewriter-effect";
const Client = () => {
   const [reviews, setReviews] = useState([]);
   console.log(reviews);
   useEffect(() => {
      fetch("/clientReview.json")
         .then((response) => response.json())
         .then((data) => setReviews(data));
   }, []);
   return (
      <div className="bg-[#636390f2] py-8">
         <h2 className="text-center text-4xl  font-bold text-gray-200">
            Our Client Review
         </h2>
         <p className="text-center text-[18px] text-gray-300 my-2">
            <Typewriter
               options={{
                  strings: [
                     "we prioritize our clients' satisfaction above all else, and we're committed to delivering exceptional service to each and every one of them.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  cursor: "_",
                  deleteSpeed: 20,
               }}
            />
         </p>
         <div className="mt-5 w-full mx-auto cursor-pointer grid gap-x-3">
            <Marquee pauseOnHover gradient className="gap-x-3  ">
               <div className="flex justify-center items-center gap-x-3">
                  {reviews.map((rev) => (
                     <Review key={rev.id} rev={rev}></Review>
                  ))}
               </div>
            </Marquee>
         </div>
      </div>
   );
};

export default Client;
