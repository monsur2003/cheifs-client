import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "../Review/Review";

const Client = () => {
   const [reviews, setReviews] = useState([]);
   console.log(reviews);
   useEffect(() => {
      fetch("/clientReview.json")
         .then((response) => response.json())
         .then((data) => setReviews(data));
   }, []);
   return (
      <div className="bg-[#3b3ba1b7] py-8">
         <h2 className="text-center text-4xl  font-bold text-gray-700">
            Our Client Review
         </h2>
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
