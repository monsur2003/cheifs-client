import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecfipe = () => {
   const { id } = useParams();
   const allRecipes = useLoaderData();
   const singleRecipes = allRecipes.find((recipes) => recipes.id == id);
   console.log(singleRecipes);
   return <div></div>;
};

export default ChefRecfipe;
