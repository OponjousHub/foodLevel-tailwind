import { Link, useLoaderData } from "react-router-dom";
import { dummyMeals } from "../components/dummyMeals";

function MealsPage() {
  const mealsData = useLoaderData();
  console.log(mealsData);
  return (
    <>
      <header className="flex gap-[3rem] container">
        <div className=" flex flex-col space-y-6 pl-[3rem] my-7">
          <h1 className="text-[2.2rem] uppercase text-amber-50 font-bold family-Montserrat mb-2">
            Delicious Meals created <span> by you</span>
          </h1>

          <p className="text-[1.2rem] text-amber-50 leading-7">
            Choose your favorite recipe and cook it yourself. It is easy and
            fun.
          </p>
          <Link to={"/meals/shear"}>
            <button className="btnCSS w-[17rem]">
              Shear Your Favorite Recipe
            </button>
          </Link>
        </div>
      </header>
      <main className=" container my-[1rem] py-[2rem] grid grid-cols-3 gap-x-14 gap-y-14">
        {mealsData.map((meal) => (
          <article
            key={meal.id}
            className=" min-w-[18rem] min-h-[24rem] bg-[#000] relative"
          >
            <img
              src={meal.image}
              alt={`photo of ${meal.title}`}
              className="w-[28rem] h-[12.7rem]"
            />
            <div className="flex flex-col gap-3 pl-4 pr-4 pb-4">
              <div className="flex flex-col gap-0">
                <h3 className="text-amber-50 font-bold text-[1.4rem]">
                  {meal.title}
                </h3>
                <p className="text-[10px] text-[#aaa]">
                  By <span>{meal.creator}</span>
                </p>
              </div>
              <p className="text-[#ddd] leading-5 text-[0.9rem]">
                {meal.summary}
              </p>
              <Link to={meal.id} className="self-end absolute bottom-4">
                <button className=" bg-amber-600 rounded-[6px] hover:bg-amber-700 cursor-pointer text-[#fff] text-[1rem] font-bold; w-[7rem] py-1">
                  View details
                </button>
              </Link>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default MealsPage;

export async function loader() {
  // const response = await fetch(`http://127.0.0.1:4000/api/v1/meals`);
  // if (!response.ok) return response;
  // return response;

  return dummyMeals;
}
