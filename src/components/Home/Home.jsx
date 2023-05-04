import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import Delacious from "../Delacious/Delacious";
import Client from "../Client/Client";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Chefs></Chefs>
         <Delacious></Delacious>
         <Client></Client>
      </div>
   );
};

export default Home;
