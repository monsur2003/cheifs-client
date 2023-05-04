import React from "react";

const Review = ({ rev }) => {
   console.log(rev);
   const { image, rating, review } = rev;

   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
               <img src={image} alt="" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{rating}</h2>
               <p>{review.length < 120 ? review : review.slice(0, 120)}</p>
               <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Review;
