import { Link, useLoaderData } from "react-router-dom";
import burger from "../assets/burger.jpg";

function MealsDetailPage() {
  const data = useLoaderData();
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className="w-[28rem] h-[22rem]">
          <img
            src={burger}
            alt="Sliding image"
            className="h-[22rem] w-[100%]"
          />
        </div>
        <div className=" my-[auto] w-[28rem] flex flex-col space-y-6">
          <h1 className="text-[3rem] uppercase text-amber-50 font-bold family-Montserrat max-w-[28rem] leading-[1.4]">
            juicy cheese burger
          </h1>
          <p className="text-amber-50 text-[1rem] italic">
            by<span> Oponjous Joe</span>
          </p>
          <p className="text-[1.4rem] text-amber-50 leading-7">
            A mouth watering burger with a juicy beef patty and melted cheese
            served in soft bun.
          </p>
        </div>
      </header>
      <main className="bg-[#393634] container my-[2rem] py-[2rem] px-[5rem]">
        <h2>Ingredients</h2>
        <p className="">
          1. Prepare the patty: Mix 200g of ground beef with salt and pepper.
          Form into a patty. <br /> 2. Cook the patty: Heat a pan with a bit of
          oil. Cook the patty for 2-3 minutes each side, until browned.
          <br /> 3. Assemble the burger: Toast the burger bun halves. Place
          lettuce and tomato on the bottom half. Add the cooked patty and top
          with a slice of cheese. <br />
          4. Serve: Complete the assembly with the top bun and serve hot.
        </p>
      </main>
    </>
  );
}
export default MealsDetailPage;

export async function loader({ params }) {
  const param = params.mealId;

  const response = await fetch(`http://127.0.0.1:4000/api/v1/meals/${param}`);
  if (response.ok) return response;

  return response;
}
