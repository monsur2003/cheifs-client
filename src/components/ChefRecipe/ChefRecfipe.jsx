import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecfipe = () => {
   const { id } = useParams();
   const allRecipes = useLoaderData();
   const singleRecipes = allRecipes.find((recipes) => recipes.id == id);
   console.log(singleRecipes);
   return (
      <div>
         <h2>This ChefRecife page</h2>
         <p className="text-danger">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quis
            dignissimos porro ipsa ipsam tempora consequuntur, aspernatur
            assumenda enim perspiciatis voluptatum. Accusamus tempore, deleniti
            excepturi porro debitis dolores, facilis, sit provident iusto cum
            quis consequatur nesciunt architecto veritatis repudiandae
            voluptatibus quia similique temporibus quidem rem nobis minima
            adipisci odit. Quas fugiat quibusdam consectetur facere dolorem
            saepe aliquid placeat maiores, voluptatem nemo assumenda alias!
            Corrupti odit velit eligendi explicabo tenetur ratione, voluptas,
            saepe itaque quisquam veniam asperiores officia assumenda deserunt
            laborum. Dolor nulla ipsum omnis error nobis quod ratione libero,
            assumenda illum recusandae et sed odio mollitia quisquam
            consequuntur quo eaque ullam ab totam velit architecto vel
            voluptate. Soluta pariatur magni quo amet temporibus perferendis
            laudantium illum, repudiandae qui quas fugit dolorum dolores,
            nostrum veritatis eum natus modi, repellat possimus. Neque porro
            quas non reprehenderit repudiandae amet quibusdam nulla officiis
            blanditiis dicta, quos animi beatae, ducimus repellat explicabo
            deserunt rerum fugiat nobis nesciunt praesentium. Praesentium atque
            assumenda commodi consequatur vitae non perferendis odio saepe
            quisquam pariatur natus sequi tenetur ea voluptate, velit nihil sint
            temporibus quidem quasi, veritatis aspernatur quos fuga! Provident
            expedita, reprehenderit a minus atque nihil distinctio aut, eum
            voluptates ut aliquid earum. Quia, pariatur. Dolorum laborum
            recusandae aliquid mollitia tempore nulla aliquam? Fugit totam
            recusandae delectus voluptatum aut nobis, ad iure laudantium ipsa
            rerum laboriosam numquam temporibus culpa quisquam, laborum ratione
            dignissimos? Ab cumque in quasi natus velit, error doloribus ipsam
            reprehenderit dolores fugiat, harum odit quia dolor repellat porro
            saepe blanditiis dolorum! Iste saepe aut, soluta exercitationem
            fugiat corrupti eum accusamus, porro quaerat quasi consequuntur
            ipsam magnam culpa vitae quos nemo quo harum doloremque natus rerum?
            Odio, dicta omnis quidem facere delectus distinctio tempora! Dolore
            architecto nemo, laborum quia quis cupiditate voluptate eum
            asperiores expedita voluptatem corporis voluptas voluptatibus
            voluptates similique sapiente excepturi obcaecati magnam aspernatur,
            ipsum inventore suscipit illum harum veniam ad? Excepturi, commodi
            quae? Iure assumenda quidem necessitatibus, incidunt quam
            accusantium officiis tempore! Vel quaerat sequi doloribus voluptates
            nemo, quasi nam esse aut labore architecto voluptas consectetur
            possimus maiores est. Atque eum, reiciendis blanditiis amet placeat
            quam, quia nulla magnam dolorum cumque assumenda itaque ad libero a
            beatae temporibus, voluptate unde cum enim iure fuga harum qui
            autem? Excepturi odit nisi amet, atque expedita dignissimos
            consequatur recusandae sit molestias ipsam repellat tempore,
            adipisci consectetur impedit laudantium consequuntur praesentium
            dolor sint magni ut, et explicabo autem tenetur? Nam, beatae
            deserunt. Assumenda quod fugiat voluptas nulla nisi obcaecati?
            Reprehenderit delectus quod quam libero quaerat similique placeat
            inventore ipsam id enim dolor, voluptate totam suscipit repudiandae
            mollitia rerum corrupti laboriosam doloribus officia ab nesciunt.
            Ipsum necessitatibus quos molestiae. Deleniti officiis
            exercitationem quos aut esse maiores magni voluptates, mollitia,
            dicta iusto in. Et porro dolorum dolorem quaerat fugit. Atque
            quisquam adipisci molestias reiciendis quia non earum iste deleniti
            sunt harum, fuga eligendi autem labore nisi voluptate repudiandae,
            ut rerum error! Reprehenderit voluptatibus aut officia, tenetur sed
            omnis repudiandae non debitis illo dolorum veritatis eius ad!
            Voluptatem veniam autem eveniet quam alias voluptatum, quaerat nobis
            molestias tempora culpa obcaecati deleniti!
         </p>
      </div>
   );
};

export default ChefRecfipe;
