import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecfipe = () => {
   const { id } = useParams();
   const allRecipes = useLoaderData();
   const singleRecipes = allRecipes.find((recipes) => recipes.id == id);
   console.log(singleRecipes);
   return (
      <div className="py-20">
         <h3 className="0 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore labore debitis sint ex odit tempora obcaecati quaerat
            similique, porro ipsum reiciendis eligendi placeat fugiat molestiae
            dolorum soluta non cum blanditiis dignissimos velit? Numquam modi
            error nemo, impedit aliquid, blanditiis ipsam ipsum libero placeat
            porro ab provident deserunt quia vero architecto id distinctio
            aliquam laudantium cupiditate animi dicta rerum reprehenderit. Omnis
            cupiditate impedit blanditiis facere minima eligendi expedita error
            repudiandae odit dolore mollitia id saepe ab rerum recusandae autem
            corporis magni labore dolores aut obcaecati, adipisci fugiat fugit
            eius. Dolorum perferendis iusto, autem modi laborum, iste soluta
            alias inventore impedit est earum reprehenderit. Ab fuga numquam, ut
            cum tenetur nostrum est, excepturi quos totam, natus omnis magnam
            aliquam sapiente quo voluptas veniam in explicabo qui quia ad hic
            ullam eveniet quaerat? Corrupti quos aspernatur dolores at dolor
            quibusdam harum voluptatibus odit, maxime reprehenderit, dicta
            corporis aut vero, eius nam porro. Incidunt, enim nobis! Aspernatur
            hic consectetur corporis laudantium rerum atque, blanditiis ut
            aperiam maxime distinctio velit iste amet, iure animi laboriosam
            autem. Vel accusamus cumque quas. Fuga recusandae, illum soluta
            sapiente consectetur accusamus nesciunt? Quae fugit reiciendis porro
            inventore magni provident quod modi molestiae possimus nihil nemo
            facilis voluptatem fugiat vel, eligendi, dolore veritatis qui
            impedit dignissimos numquam harum! Quis eos quas a ullam id soluta
            illo ab pariatur! Laboriosam ducimus, natus voluptatibus ullam eum
            vitae inventore perspiciatis quo. Voluptates eligendi odit
            accusantium quae velit itaque magni quod ullam veniam voluptatem
            dolore obcaecati architecto, animi error eveniet ipsam harum officia
            saepe nihil, quisquam asperiores adipisci aspernatur assumenda. Modi
            enim iusto non veritatis nihil quod harum. Aliquid fuga perferendis
            inventore quaerat deserunt quia a molestiae aperiam. Vero
            perspiciatis molestias beatae tempore reiciendis sapiente ab omnis,
            provident ipsam nesciunt, excepturi numquam quos dolore veniam saepe
            quisquam id iure optio ratione veritatis dignissimos.
         </h3>
      </div>
   );
};

export default ChefRecfipe;
