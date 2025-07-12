import { Link, useLoaderData } from "react-router-dom";
import { dummyMeals } from "../components/dummyMeals";
import burger from "../assets/burger.jpg";

function MealsDetailPage() {
  const meal = useLoaderData();

  return (
    <div>
      <header className="flex gap-[3rem] container">
        <div className="w-[28rem] h-[22rem]">
          <img
            src={meal[0].image}
            alt="Sliding image"
            className="h-[22rem] w-[100%]"
          />
        </div>
        <div className=" my-[auto] w-[28rem] flex flex-col space-y-6">
          <h1 className="text-[3rem] uppercase text-amber-50 font-bold family-Montserrat max-w-[28rem] leading-[1.4]">
            {meal[0].title}
          </h1>
          <p className="text-amber-50 text-[1rem] italic">
            by <span>{meal[0].creator}</span>
          </p>
          <p className="text-[1.4rem] text-amber-50 leading-7">
            {meal[0].summary}
          </p>
        </div>
      </header>
      <main className="bg-[#393634] container my-[2rem] py-[2rem] px-[5rem]">
        <h2>Ingredients</h2>
        <p className="">{meal[0].instructions}</p>
      </main>
    </div>
  );
}

export default MealsDetailPage;

export async function loader({ params }) {
  const param = params.mealId;
  // const response = await fetch(`http://127.0.0.1:4000/api/v1/meals/${param}`);
  // if (response.ok) return response;
  // return response;
  console.log(param);
  const result = dummyMeals.filter((meal) => meal.id === param);
  console.log(result);
  return result;
}
